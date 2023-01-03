import { CategoryBuilderService } from '../../services/category-builder.service';
import { CategoryBuilderComponent } from './category-builder.component';

describe('COMPONENT:  CategoryBuilderComponent', () => {
  const mockService = new CategoryBuilderService();

  before(() => {});
  beforeEach(() => {
    mockService.ageRangeName = '0-5';
    cy.viewport(1920, 1080);
    cy.mount(CategoryBuilderComponent, {
      componentProperties: {},
      providers: [{ provide: CategoryBuilderService, useValue: mockService }],
    }).then((component) => {
      // someVar = component.divisionTotal;
    });
  });
  it('show something', () => {
    cy.get('[data-test="cbc-subtitle"]').should('contain', '0-5');
  });
  it('should test click of cancel', () => {

    cy.get('[data-test="cbc-cancel"]')
      .click()
      .then(() => {
        mockService.change.subscribe((resp: boolean) => {
          expect(resp).to.be.false;
        });        
      });

  });
});

/*  mocks */
class MockCategoryBuilder extends CategoryBuilderService {
  constructor() {
    super();
    this.ageRangeName = '0-5';
  }
}
