const URL_CACHED = [
  /filtro/,
  /usuarios/,
  /crm\/kanban\/listarcolunaskanban/,
  /crm\/loja\/\d+\/canais/,
  /crm\/negociacoes\/motivos\/\d+/,
  /crm\/detalhepagamento\/instituicoes/,
  /usuario\/estados/,
  /crm\/uploads\/regras/,
];

export function getURLCached(req) {
  const { url } = req;
  const urlMapped = URL_CACHED.map(pattern => {
    const patternRegexp = new RegExp(pattern);
    return patternRegexp.test(url);
  });
  const shouldCached = urlMapped.includes(true);
  return !shouldCached;
}
