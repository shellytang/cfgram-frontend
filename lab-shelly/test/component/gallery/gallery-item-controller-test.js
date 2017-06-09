'use strict';

const expect = require('chai').expect;

describe.only('Gallery Item Controller', function() {

  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, galleryService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.$componentController = $componentController;
      this.galleryService = galleryService;
    });

    this.mockBindings = {
      gallery: {
        name: 'galleryOne',
        desc: 'galleryOne',
        pics: [],
        _id: '1234',
      },
    };

    this.$window.localStorage.token = 'test token';
    this.scope = this.$rootScope.$new();

    this.galleryItemCtrl = this.$componentController(
      'galleryItem',
      {
        scope: this.scope,
        picService: this.picService,
      },
      this.mockBindings
    );

    this.galleryItemCtrl.$onInit();
    done();
  });

  afterEach(done => {
    delete this.galleryItemCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  // describe('test', () => {
  //   it('should pass', done => {
  //     expect(true).to.equal(true);
  //     done();
  //   });
  // });

  describe.only('Default properties', () => {

    it('should have a showEditGallery property', done => {
      expect(this.galleryItemCtrl).to.have.a.property('showEditGallery');
      expect(this.galleryItemCtrl.showEditGallery).to.be.false;
      done();
    });

    it('should have a #makeCurrentGallery method', done => {
      expect(this.galleryItemCtrl.makeCurrentGallery).to.be.instanceOf(Function);
      done();
    });

    it('should have a #deletGallery method', done => {
      expect(this.galleryItemCtrl.deleteGallery).to.be.instanceOf(Function);
      done();
    });

  });

  describe('Functional methods', () => {

  });



});
