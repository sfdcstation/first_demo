({
    handleClick : function(c, e, h) {
        var namevalue = c.get("v.name");
        if(namevalue == undefined || namevalue.trim() == ""){
            c.set("v.isColor", false);
        }else{
            c.set("v.isColor", true);
        }
    }
})