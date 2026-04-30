import { TestBed } from '@angular/core/testing';

import { Recado } from './recado';

describe('Recado', () => {
  let service: Recado;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Recado);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
