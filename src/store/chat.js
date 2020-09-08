import { Subject } from "rxjs";

const subject = new Subject();

const initialState = {
  chats: [],
  chatCount: 0,
};

let state = initialState;

const chatStore = {
  init: () => {
    state = { ...state, chatCount: 0 };
    subject.next(state);
  },
  subscribe: (setState) => subject.subscribe(setState),
  sendMessage: (message) => {
    state = {
      ...state,
      chats: [...state.chats, message],
      chatCount: state.chatCount + 1,
    };
    subject.next(state);
  },
  clearChat: () => {
    state = { initialState };
    subject.next(state);
  },
  initialState,
};

export default chatStore;
