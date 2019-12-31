import { TestBed } from "@angular/core/testing";

import { ToastServiceV1 } from "./toastV1.service";

describe("ToastServiceV1", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ToastServiceV1 = TestBed.get(ToastServiceV1);
    expect(service).toBeTruthy();
  });
});
