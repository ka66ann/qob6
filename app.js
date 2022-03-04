import { json, error, missing, ThrowableRouter, withContent, withParams } from './it'

const router = ThrowableRouter()

B = {
    method: "sendMessage",
    chat_id: 1875804439,
    text: "NULL",
    reply_markup: {
        inline_keyboard: [
            [{
                "text": "▶️",
                "switch_inline_query_current_chat": ""
            }, {
                "text": "➖",
                "switch_inline_query_current_chat": "-"
            }, {
                "text": "➕",
                "switch_inline_query_current_chat": "+"
            }, {
                "text": "/",
                "switch_inline_query_current_chat": "\\"
            }, {
                "text": "👁‍🗨",
                "switch_inline_query": ""
            }]
        ]
    }
}

router.post('/', withContent, ({ content }) =>
    content ?
    json(B) // send a 204 no-content response
    :
    error(400, 'You probably need some content for that...')
)

router.all('*', () => missing('Are you sure about that?'))

addEventListener('fetch', event =>
    event.respondWith(router.handle(event.request))
)
