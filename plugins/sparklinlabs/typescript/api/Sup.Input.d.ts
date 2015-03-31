declare module Sup {
  module Input {
    function getScreenSize(): { x: number; y: number; };
    function getMouseVisible(): boolean;
    function setMouseVisible(visible: boolean);

    function getMousePosition(): { x: number; y: number; };
    function getMouseDelta(): { x: number; y: number; };
    function isMouseButtonDown(button: number): boolean;
    function wasMouseButtonJustPressed(button: number): boolean;
    function wasMouseButtonJustReleased(button: number): boolean;

    function getTouchPosition(index: number): { x: number; y: number; };
    function isTouchDown(index: number): boolean;
    function wasTouchStarted(index: number): boolean;
    function wasTouchEnded(index: number): boolean;
    function vibrate(pattern: number): void;
    function vibrate(pattern: Array<number>): void;

    // Valid key names (based on window.KeyEvent.DOM_VK_*):
    // CANCEL, HELP, BACK_SPACE, TAB, CLEAR, RETURN, ENTER, SHIFT, CONTROL, ALT,
    // PAUSE, CAPS_LOCK, ESCAPE, SPACE, PAGE_UP, PAGE_DOWN, END, HOME,
    // LEFT, UP, RIGHT, DOWN, PRINTSCREEN, INSERT, DELETE,
    // 0 to 9, SEMICOLON, EQUALS, A to Z,
    // CONTEXT_MENU, NUMPAD0 to NUMPAD9,
    // MULTIPLY, ADD, SEPARATOR, SUBTRACT, DECIMAL, DIVIDE,
    // F1 to F24, NUM_LOCK, SCROLL_LOCK, COMMA, PERIOD, SLASH, BACK_QUOTE,
    // OPEN_BRACKET, BACK_SLASH, CLOSE_BRACKET, QUOTE, META
    function isKeyDown(keyName: string): boolean;
    function wasKeyJustPressed(keyName: string): boolean;
    function wasKeyJustReleased(keyName: string): boolean;

    function isGamepadButtonDown(gamepad: number, button: number): boolean;
    function wasGamepadButtonJustPressed(gamepad: number, button: number): boolean;
    function wasGamepadButtonJustReleased(gamepad: number, button: number): boolean;
    function getGamepadAxisValue(gamepad: number, axis: number): number;
  }
}
