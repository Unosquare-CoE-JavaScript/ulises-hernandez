import { clearForm, createWidget, deleteWidget, getWidgetDetailsTitle, getWidgetItem, getWidgets, selectWidget, state, updateWidget } from "../support/widgets.po";


describe('Widgets', () => {
  const model = 'widgets';
  let widgets = null;

  before(() => {
    cy.fixture('widgets').then((json) => (widgets = json));
    cy.loadData(['widgets']);
    cy.visit(state.route);
  });

  it('should be on the widgets page', () => {
    cy.checkLocation(state.route);
  });

  it('should list all widgets', () => {
    getWidgets().should('have.length', widgets.length);
  });

  it('should create a widget', () => {
    createWidget(model, state.newMockWidget);
    getWidgetItem(state.newMockWidget).should('exist');
  });

  it('should display a selected widget details', () => {
    clearForm();
    selectWidget(state.newMockWidget);
    getWidgetDetailsTitle().should('contain.text', `Editing ${state.newMockWidget.title}`);
  });

  it('should clear widget details the form on cancel', () => {
    selectWidget(state.newMockWidget);
    clearForm();
    getWidgetDetailsTitle().should('contain.text', 'Select Widget');
  });

  it('should update a widget', () => {
    selectWidget(state.updateMockWidget);
    updateWidget(model, state.updateMockWidget);
    getWidgetItem(state.updateMockWidget).should('exist');
  });

  it('should delete a widget', () => {
    deleteWidget(model, state.updateMockWidget);
    getWidgetItem(state.updateMockWidget).should('not.exist');
    getWidgets().should('have.length', widgets.length);
  });
});
