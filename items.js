const Router = require('koa-router')

const router = new Router({
    prefix: '/items'
})

let items = [
    { id: 100, iname: 'Macbook Pro 13', price: 'THB 50,000' },
    { id: 101, iname: 'Macbook Pro 14', price: 'THB 70,000' },
    { id: 102, iname: 'Macbook Pro 15', price: 'THB 90,000' },
    { id: 103, iname: 'Macbook Pro 16', price: 'THB 120,000' },
]

// Get all items
router.get('/', (ctx, next) => {
    ctx.body = items;
    next();
})

// Get single item
router.get('/:id', (ctx, next) => {
    let getCurrentItem = items.filter(function(item) {
        if (item.id == ctx.params.id) {
            return true;
        }
    })

    if (getCurrentItem.length) {
        ctx.body = getCurrentItem[0];
    } else {
        ctx.response.status = 404;
        ctx.body = 'Item Not Found';
    }
    next();
})

// Create items
router.post('/add', (ctx, next) => {
    if (!ctx.request.body.id || !ctx.request.body.iname || !ctx.request.body.price) {
        ctx.response.status = 400;
        ctx.body = 'Please enter the data'
    } else {
        let newItem = items.push({
            id: ctx.request.body.id,
            iname: ctx.request.body.iname,
            price: ctx.request.body.price,
        })
        ctx.response.status = 201;
        ctx.body = `New item added with id: ${ctx.request.body.id} & item name: ${ctx.request.body.iname}`
    }

    next();
})



module.exports = router;
