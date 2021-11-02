const sequelize = require("../config/connection");
const {User,Blog,Comment} = require("../models")

const seed = async () => {
    const userData = await User.bulkCreate([
        {
            username:"joe",
            password:"password",
            email:"joe@joe.joe"
        },
        {
            username:"bob",
            password:"password",
            email:"bob@bob.bob"
        },
        {
            username:"carl",
            password:"password",
            email:"carl@carl.carl"
        }
    ],{
        individualHooks:true
    })
    const blogData = await Blog.bulkCreate([
        {
            title:"'test post",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus leo diam, ac lacinia leo mattis id. Duis et dolor iaculis, dictum quam tincidunt, dictum enim. Suspendisse non arcu neque. Mauris nec aliquam orci, eget imperdiet tellus. In porta eros a enim sagittis, et pharetra augue malesuada. Mauris id commodo eros. Quisque eu justo a lacus consectetur ultrices eu viverra felis. Curabitur cursus risus libero, at consectetur eros dictum vitae. Duis sit amet sapien cursus, bibendum enim eget, tristique magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas a vestibulum est, a rutrum lectus. Nunc dui purus, condimentum vitae scelerisque eu, tempor vitae nunc. In suscipit, dui tincidunt convallis elementum, purus lectus venenatis nibh, eget ullamcorper nisi dui nec odio. In arcu enim, condimentum fermentum ultrices ut, malesuada id quam. Vestibulum dignissim, diam nec fringilla mollis, augue est ullamcorper leo, at dignissim est lectus in mi.",
            UserId:1
        },
        {
            title:"Test post",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus leo diam, ac lacinia leo mattis id. Duis et dolor iaculis, dictum quam tincidunt, dictum enim. Suspendisse non arcu neque. Mauris nec aliquam orci, eget imperdiet tellus. In porta eros a enim sagittis, et pharetra augue malesuada. Mauris id commodo eros. Quisque eu justo a lacus consectetur ultrices eu viverra felis.",
            UserId:2
        },
        {
            title:"Test post",
            body:"Maecenas a vestibulum est, a rutrum lectus. Nunc dui purus, condimentum vitae scelerisque eu, tempor vitae nunc. In suscipit, dui tincidunt convallis elementum, purus lectus venenatis nibh, eget ullamcorper nisi dui nec odio. In arcu enim, condimentum fermentum ultrices ut, malesuada id quam. Vestibulum dignissim, diam nec fringilla mollis, augue est ullamcorper leo, at dignissim est lectus in mi.",
            UserId:3
        }
    ])
    const commentData = await Comment.bulkCreate([
        {
            body:"Oh Yeah",
            username:"carl",
            UserId:3,
            BlogId:1
        },
        {
            body:"bruh i like it",
            username:"joe",
            UserId:1,
            BlogId:2
        },
        {
            body:"i love manatees",
            username:"bob",
            UserId:2,
            BlogId:3
        }
    ])    
}

sequelize.sync({force:true}).then(()=>{
    seed();
})