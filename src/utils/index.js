export const console = s => {
  process.stdout.write(`${s}\n`);
};

export const getCookie = key => {
  let cookie;
  window.document.cookie.split(';').forEach(item => {
    const entries = item.trim().split('=');
    const [Key, Value] = entries;
    if (Key === key) {
      cookie = Value;
    }
  });
  return cookie;
};

export const cookieSet = (key, value) => {
  window.document.cookie = `${key}=${value};domain=${
    window.location.hostname === 'localhost' ? 'localhost' : '.cockpit.com.br'
  };path=/`;
};

export const tokenGet = () =>
  getCookie('CockpitLogged') ? getCookie('CockpitLogged') : '';

export const removeAccents = str => {
  const accents =
    'ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
  const accentsOut =
    'AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';
  str = str.split('');
  const strLen = str.length;
  let i;
  let x;
  for (i = 0; i < strLen; i += 1) {
    x = accents.indexOf(str[i]);
    if (x !== -1) {
      str[i] = accentsOut[x];
    }
  }
  return str.join('');
};

export const isLoading = reqs => {
  const classActive = 'loadingActive';
  const container = document.querySelector('[class^="ContainerLoadBar-"]');
  const bar = document.querySelector(
    '[class^="ContainerLoadBar-"] [class^="Loadbar"]'
  );
  if (reqs) {
    if (container.classList.contains(classActive)) return;
    container.classList.add(classActive);
    bar.classList.add(classActive);
  }
  if (!reqs) {
    container.classList.remove(classActive);
    bar.classList.remove(classActive);
  }
};

export const bytesToSize = bytes => {
  const sizes = ['b', 'Kb', 'Mb', 'Gb', 'Tb'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return Math.round(bytes / 1024 ** i, 2) + sizes[i];
};

function scrolling(eAmt) {
  window.scrollBy(0, eAmt);
}

export const scrollSmooth = options => {
  const { where = 'bottom', e, time = 2000 } = options || {};
  let eTop = '';
  if (where === 'bottom')
    eTop = e
      ? e.getBoundingClientRect().bottom
      : document.body.getBoundingClientRect().bottom;
  if (where === 'top')
    eTop = e
      ? e.getBoundingClientRect().top
      : document.body.getBoundingClientRect().top;
  const eAmt = eTop / 100;
  let curTime = 0;
  while (curTime <= time) {
    window.setTimeout(scrolling, curTime, eAmt, where);
    curTime += time / 100;
  }
};
