import { SessionListComponent } from "./session-list.component";
import { ISession } from "../shared/event.model";

describe("SessionListComponent", () => {
  let component: SessionListComponent;
  let mockAuthService, mockVoterService, mockToastrService;

  beforeEach(() => {
    component = new SessionListComponent(
      mockAuthService,
      mockVoterService,
      mockToastrService
    );
  });

  describe("ngOnChanges", () => {
    it("should filter the session correctly", () => {
      component.sessions = <ISession[]>[
        { name: "session 1", level: "intermediate" },
        { name: "session 2", level: "intermediate" },
        { name: "session 3", level: "beginner" }
      ];
      component.filterBy = "intermediate";
      component.sortBy = "name";
      component.eventId = 3;

      component.ngOnChanges();
      expect(component.visibleSessions.length).toBe(2);
    });

    it("should sort the session correctly", () => {
      component.sessions = <ISession[]>[
        { name: "session 1", level: "intermediate" },
        { name: "session 3", level: "beginner" },
        { name: "session 2", level: "intermediate" }
      ];
      component.filterBy = "all";
      component.sortBy = "name";
      component.eventId = 3;

      component.ngOnChanges();
      expect(component.visibleSessions[2].name).toBe("session 3");
    });
  });
});
