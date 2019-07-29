import messages from '../src/translations';

export function $t (tag) {
  return tag;
}

const i18nMock = {
  $i18n: {
    locale: 'en',
    messages
  }
};

export default i18nMock;
