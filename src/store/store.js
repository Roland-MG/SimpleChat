// import { createStore } from "redux";
// const reducer = (state, action) => {
//     switch(action.type) {
//         case "nPlus":
//             return {
//                 ...state,
//                 n: state.n + action.payload
//             }
//         case "nMinus":
//             return {
//                 ...state,
//                 n: state.n - action.payload
//             }
//         default:
//             return state;
//     }
// }
// const initialState = {
//     n:0
// }

// const store = createStore(reducer, initialState);
// export default store;



import { createStore } from "redux";
const store = createStore((state, action) => {
    switch (action.type) {
        case 'toggle-txt':
            return {
                ...state,
                txtMessage: {
                    ...state.txtMessage,
                    text: action.payload
                }
            }
        case 'toggle-txt-id':
            return {
                ...state,
                txtMessage: {
                    ...state.txtMessage,
                    id: action.payload
                }
            }
        case 'send-msg':

            return {
                ...state,
                messages: {
                    data: [
                        ...state.messages.data,
                        {
                            id: `${new Date().getTime().toString()}`,
                            user: state.messages.user,
                            txt: state.txtMessage.text
                        }
                    ],
                    user: (state.messages.user === 'me') ? 'you' : 'me'
                },
                txtMessage: {
                    id: '',
                    text: ''
                }
            }
        case 'del-msg':
            return {
                ...state,
                messages: {
                    data: [
                        ...state.messages.data.filter(item => item.id !== action.payload),
                    ]
                }
            }
        case 'edit-msg':

            state.messages.data[action.payload.id].txt = action.payload.text
            return {
                ...state,
                txtMessage: {
                    id: '',
                    text: ''
                }
            }

        default:
            return state;
    }
},
    {
        txtMessage: {
            id: '',
            text: '',

        },
        messages: {
            user: 'me',
            data: []
        }
    });
export default store;