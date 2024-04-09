import {HomeComponent} from "./pages/home/home.component";
import {SinglePostComponent} from "./pages/single-post/single-post.component";
import {SearchResultComponent} from "./pages/search-result/search-result.component";
import {PostByCategoryComponent} from "./pages/post-by-category/post-by-category.component";
import {Routes} from "@angular/router";

export default [
    {path: '', component: HomeComponent},
    {path: 'singlePost/:slug', component: SinglePostComponent},
    {path: 'search/:keyword', component: SearchResultComponent},
    {path: 'category/:slug', component: PostByCategoryComponent},
] as Routes
