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

      describe('When the URL has no language parameter in it', () => {
        let to = { fullPath: '/page' };
        
        it('should set the default locale to english', () => {
          mockLocaleSetter(to, undefined, $router.next);
          expect(i18n.locale).toEqual('en');    
        });
      });

      describe('When the URL begins with /fr/', () => {
        let to = { fullPath: '/fr/page' };

        it('should set the locale to french', () => {
          mockLocaleSetter(to, undefined, $router.next);
          expect(i18n.locale).toEqual('fr'); 
        });
      });
    });
  });
});
