/* Pure filtering functions shared by the UI and regression tests. */
(function (root) {
  'use strict';
  const within = (path, parent) => path === parent || path.startsWith(parent + '/');
  function categoryMatch(categories, selected) {
    if (!selected.length) return true;
    const flags = selected.map(parent => categories.some(path => within(path, parent)));
    return flags.some(Boolean);
  }
  function toggleSelection(selected, id, checked) {
    if (!checked) return selected.filter(x => x !== id);
    return [...selected.filter(x => !within(x, id) && !within(id, x)), id];
  }
  function setCategory(selected, id, checked, nodes) {
    if (checked) {
      let result = toggleSelection(selected, id, true);
      let parent = nodes.find(n => n.id === id)?.parent;
      while (parent) {
        const children = nodes.filter(n => n.parent === parent);
        if (!children.every(n => isSelected(result, n.id))) break;
        result = toggleSelection(result, parent, true);
        parent = nodes.find(n => n.id === parent)?.parent;
      }
      return result;
    }
    function subtract(path) {
      if (within(path, id)) return [];
      if (!within(id, path)) return [path];
      return nodes.filter(n => n.parent === path).flatMap(n => subtract(n.id));
    }
    return selected.flatMap(subtract);
  }
  function isSelected(selected, id) {
    return selected.some(parent => within(id, parent));
  }
  // The event path survives DOM replacement during a menu click.
  function isInsideCategory(event, control) {
    return event.composedPath().includes(control);
  }
  function sourceLabel(resource, lang) {
    if (resource.source_label) return resource.source_label;
    const host = new URL(resource.url).hostname.replace(/^www\./, '');
    if (host === 'typesafe.ai' || host.endsWith('.typesafe.ai')) return lang === 'zh' ? '官方' : 'Official';
    return ({'arxiv.org':'arXiv','github.com':'GitHub','zenodo.org':'Zenodo',
      'papers.ssrn.com':'SSRN','escholarship.org':'eScholarship',
      'venturebeat.com':'VentureBeat','datacamp.com':'DataCamp',
      'x.com':'X','threads.com':'Threads','doi.org':'DOI'})[host] || host;
  }
  function filter(rows, state, categoryLabels = {}) {
    const q = (state.query || '').trim().toLowerCase();
    return rows.filter(x =>
      (!state.kind || state.kind === 'all' || x.kind === state.kind) &&
      categoryMatch(x.categories, state.selected || []) &&
      (!state.model || x.target === state.model) &&
      (!state.tag || x.contributions.includes(state.tag)) &&
      (!state.source || sourceLabel(x,'en') === state.source) &&
      (!state.dataset || (x.datasets || []).some(d=>d.toLowerCase().includes(state.dataset.trim().toLowerCase()))) &&
      (!q || [x.model_info?.release, x.model_info?.license, x.id, x.title, x.short, x.brief_en, x.brief_zh, ...(x.authors || []), sourceLabel(x,'en'), sourceLabel(x,'zh'), ...(x.datasets || []),
        ...x.categories.map(c => categoryLabels[c] || c)].join(' ').toLowerCase().includes(q))
    );
  }
  const api = {within, categoryMatch, toggleSelection, setCategory, isSelected, isInsideCategory, sourceLabel, filter};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.JevCatalog = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
