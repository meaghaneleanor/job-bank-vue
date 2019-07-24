import { i18n } from '../../src/plugins/i18n.js';
import { localeSetter } from '../../src/router/index.js';

describe('Router', () => {
  describe('Navigation Guards', () => {
    describe('.localeSetter', () => {
      const $router = {
        push: jest.fn(),
        next: jest.fn(),
      };

      let mockLocaleSetter = jest.fn(localeSetter);

      it('should set the default locale to english', () => {
        let to = { fullPath: '/page' };

        mockLocaleSetter(to, undefined, $router.next);
        expect(i18n.locale).toEqual('en');    
      });

      it('should set the locale to french if the language prefix is `/fr/`', () => {
        let to = { fullPath: '/fr/page' };
  
        mockLocaleSetter(to, undefined, $router.next);
        expect(i18n.locale).toEqual('fr'); 
      });
    });
  });
});
