'use client';

import { useCookiesNext } from 'cookies-next';

export default function ClientComponent() {
  const { setCookie, hasCookie, deleteCookie, getCookies, getCookie } = useCookiesNext();

  setCookie('key', 'value');

  return (
      <div>
        <p>hasCookie - {JSON.stringify(hasCookie('key'))}</p>
        <p>getCookies - {JSON.stringify(getCookies)}</p>
        <p>getCookie - {getCookie('key')}</p>
        <button type="button" onClick={() => deleteCookie('key')}>
          deleteCookie
        </button>
      </div>
  );
}