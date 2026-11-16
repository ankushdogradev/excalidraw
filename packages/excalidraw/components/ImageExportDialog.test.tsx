import { render } from "../test-utils";
import { ImageExportDialog } from "./ImageExportDialog";
import { ActionManager } from "../actions/manager";
import { getDefaultAppState } from "../appState";

describe("ImageExportDialog", () => {
  it("renders without crashing", () => {
    const appState = getDefaultAppState();
    const actionManager = new ActionManager();
    const { container } = render(
      <ImageExportDialog
        elements={[]}
        appState={appState}
        files={{}}
        actionManager={actionManager}
        onExportImage={jest.fn()}
        onCloseRequest={jest.fn()}
        name="Untitled"
      />,
    );
    expect(container).toBeDefined();
  });
});
