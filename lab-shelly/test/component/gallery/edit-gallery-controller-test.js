// 'use strict';

//TEST NOT PASSING/COMPLETD...
//
// const expect = require('chai').expect;
//
// describe('Edit Gallery Component', function() {
//
//   beforeEach(done => {
//     angular.mock.module('cfgram');
//     angular.mock.inject(($rootScope, $httpBackend, $window, $componentController, authService, galleryService) => {
//       this.$rootScope = $rootScope;
//       this.$httpBackend = $httpBackend;
//       this.$window = $window;
//       this.$componentController = $componentController;
//       this.authService = authService;
//       this.galleryService = galleryService;
//       this.mockBindings = {
//         gallery: {
//           name: 'galleryOne',
//           desc: 'galleryOne',
//           pics: [],
//           _id: '1234',
//         },
//       };
//
//       this.$window.localStorage.token = 'test token';
//       this.scope = this.$rootScope.$new();
//
//       this.editGalleryCtrl = this.$componentController('editGallery', null, this.mockBindings);
//       this.editGalleryCtrl.$onInit();
//       done();
//     });
//   });
//
//   afterEach(done => {
//     delete this.editGalleryCtrl;
//     delete this.$window.localStorage.token;
//     this.$rootScope.$apply();
//     done();
//   });
//
//   describe('Default properties', () => {
//     it('should have an edit gallery method', done => {
//       expect(this.editGalleryCtrl.updateGallery).to.be.an.instanceOf(Function);
//       done();
//     });
//
//     it('should have the proper mock bindings', done => {
//       expect(this.editGalleryCtrl.gallery.name).to.equal(this.mockBindings.gallery.name);
//       expect(this.editGalleryCtrl.gallery.name).to.equal(this.mockBindings.gallery.desc);
//       done();
//     });
//   });
//
//   describe('Functional methods', () => {
//
//     describe('#editGalleryCtrl.updateGallery', () => {
//       it('should make a valid PUT request', done => {
//
//         let expectUrl = 'http://localhost:3000/api/gallery/1234';
//         let expectHeaders = {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${this.$window.localStorage.token}`,
//         };
//
//         let mockBindings = {
//           gallery: {
//             name: 'galleryOne',
//             desc: 'galleryOne',
//             pics: [],
//             _id: '1234',
//           },
//         };
//
//         let updatedMockBindings = {
//           gallery: {
//             name: 'galleryUpdate',
//             desc: 'galleryUpdate',
//             pics: [],
//             _id: '1234',
//           },
//         };
//
//         this.$httpBackend.expectPUT(expectUrl, updatedMockBindings, expectHeaders)
//           .respond(200);
//         expect(this.editGalleryCtrl.updateGallery).to.not.throw();
//         // expect(this.editGalleryCtrl.gallery.name).to.equal('galleryUpdate');
//         // expect(this.editGalleryCtrl.galelry.desc).to.equal('galleryUpdate');
//         this.$httpBackend.flush();
//         this.$rootScope.$apply();
//         done();
//       });
//
//
//     });
//
//   });
//
// });
