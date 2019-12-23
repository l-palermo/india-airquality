import url from '../../api_key';

export default function loadGoogle(doc = document, APIurl = url) {
  return new Promise((resolve) => {
    const s = doc.createElement('script');
    s.src = APIurl;
    doc.body.appendChild(s);
    s.addEventListener('load', () => {
      resolve();
    });
  });
}
