# cypress-component-testing-question-was-subject-launched
I am trying to use Cypress Component Testing to develop an Angular component.
In specific I am trying to see if clicking on the cancel button calls the "next" method on my service, mockService. 

This should be able to be captured by a spy I think, but because the service is private and the property in question is not a method, 
I don't see how to to it.

I am using Angular 14 code, Cypress v12.01

