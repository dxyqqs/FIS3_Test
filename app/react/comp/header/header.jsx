/**
 * Created by xiaoyden on 7/6/2016.
 */
import React from "../../libs/react";

let arr = [1,2,3,4];
let [a,...b] = arr;
console.log(b);


let HeaderComponent = React.createClass({
       render:function(){
        return <div>header</div>;
    }
});

export {HeaderComponent}