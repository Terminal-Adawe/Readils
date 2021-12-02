$(document).ready(function(){

    document.getElementById("addOpt").addEventListener("click", addOption);
    document.getElementById("createStoryButton").addEventListener("click", createStoryDisplay);
    document.getElementById("save").addEventListener("click", savePage);
    document.getElementById("delete").addEventListener("click", deletePage);
    document.getElementById("confirmLinkBtn").addEventListener("click", confirmLink2);
    
    if($('.afterPicEdit').val()==1){
        createStoryDisplay();

        console.log("determining value is "+$('.afterPicEdit').val());
    }

    var objs = [];
    var pagesArray = [];
    var linkArray = [];
    var hasPageArray = [];
    
    var storyID = 99;
    var pagesID = 100;
    var optionID = 0;
    var pageNo = 0;
    var dCounter = 0;
    
    function idGenerator(x, y){
        
//        function getRndInteger(min, max) {
//        return Math.floor(Math.random() * (max - min) ) + min;
//        }
        x++;
        
        if (y==0){
            storyID = x;
        } else if (y==1){
            pagesID = x;
        } else if (y==2){
            optionID = x;
        }
        
        return x;
    }

    $('.self-profile-info-button').on("click",function(){
        $('.storyTitleInput').val($(this).html());
        console.log("summary is "+$(this).data('summary'));
        $('.storySummary').val($(this).data('summary'));
        $('.storyTitleInput').data('storyid',$(this).data('storyid'));
        console.log("Story id value now is "+$('.storyTitleInput').data('storyid')+" because this value is "+$(this).data('storyid'));
        $('#clear').css({
            'display':'block'
        });
        $('#createStoryButton').html("Edit Story");
        $('#createStoryButton').val("editStory");
        $('.edit-pic').data('storyid',$(this).data('storyid'));
        $('.imagePathediting').val($(this).data('storyid'));

    });

    $('#clear').on("click",function(){
        $('#clear').css({
            'display':'none'
        });
        $('.storyTitleInput').val("");
        $('.storySummary').val("");
        $('#createStoryButton').html("Create Story");
        $('#createStoryButton').val("createStory");
    });
    
    
    // Function to add options
    function addOption(){
        // $('.leStoryOpts').html("Options");
        var addOptionBlocker = 0;

        for(var linkLoop =0; linkLoop < linkArray.length; linkLoop++){
         
                // If link array ID is same as option ID selected
            if(linkArray[linkLoop][0] == $('.optIDspace').val()){
                        console.log("option number is "+linkArray[linkLoop][0]+" and matches option in option id space "+$('.optIDspace').val());
                        addOptionBlocker = 1;
                    }
                }

                if(addOptionBlocker!=1){
                    $('.leStoryOpts').append("<input type='text' class='my-2 optBox option form-control' name='option' data-id='null'>");
                }

                if(addOptionBlocker==1){
                    alert("You cannot add options to this page");
                }
    }
    // End of add option function
    
    function savePage(){
        // console.log("OptIDspace(1st hidden element) contains "+$('.optIDspace').val()+", previous optID contains "+$('prevOptIDspace').val()+" and storyID is "+$('.storyID').val());
        dCounter = 0;

        if($('.story').val()==0){} else if ($('.pageIDspace').val()=="null"){
            alert("You cannot save a new page. Please create it first using the create page button");
        } else{

    // Loop through Pages array
                for(var pageSearch = 0; pageSearch < pagesArray.length; pageSearch++){

                    if($('.pageIDspace').val()==pagesArray[pageSearch][0]){

                        pagesArray[pageSearch][1] = $('.story').val();
                    }
                    
                    for(var optionSearch =0; optionSearch < pagesArray[pageSearch][2].length; optionSearch++){

                var numCount = 0;
                var option_id;

                $('.option').each(function(){
                    option_id = $(this).data("id");
                        // Check if page ID is equal to link-to number
                if(pagesArray[pageSearch][2][optionSearch][0]==option_id){
                    
                // console.log("option before "+pagesArray[pageSearch][2][numCount][1]);
                    // Update options in pages array
                pagesArray[pageSearch][2][numCount][1] = $(this).val();

                // console.log("option being stored are "+pagesArray[pageSearch][2][numCount][1]);
            }

                    numCount++;
                
                });

            dCounter++;       
                    
                }
                }

                                    // Check link array
        for(var linkSearch =0; linkSearch < linkArray.length; linkSearch++){

    // If link array ID is same as option ID selected
            if(linkArray[linkSearch][0] == $('.optIDspace').val()){
                        linkArray[linkSearch][3] = 1;
                    }
                }
            }

            // }
        // }

        // Insert into the DB
        dbInsert();
    }
    //End of Save page function


    // Delete page function
    function deletePage(){
        var deleteMode = 0;
        var otherPage = 0;

        if($('.story').val()==0){}else{
            for(var linkSearch =0; linkSearch < linkArray.length; linkSearch++){

    // Check if page is linked to other pages
            if(linkArray[linkSearch][1] == $('.prevOptIDspace').val()){
                        deleteMode = 1;

                        otherPage = linkArray[linkSearch][2];

                        break;
                    }
                }
    // End

    // Check if other pages are linked to other pages
            if(deleteMode==1){
                for(var linkSearch =0; linkSearch < linkArray.length; linkSearch++){
                            if(linkArray[linkSearch][2] == otherPage){
                                deleteMode=2;
                            }
                        }
            }
    // End

        if(deleteMode==1){
            alert("This page is linked. Deleting it will clear all links");
        }
        if(deleteMode==2){
            alert("This page is linked with sub links. Deleting it will clear all links");
        }

    $('.delete').prop('disabled',true);
        }
    }
    //end of delete page function
    
        var storyHolder;
    
     function createStoryDisplay(){
        var optionsArr = [];
        var storyTitleInput;
         var storySummary;
         var type;
         var storyID;
         var imagePath;
         var storyUpdateIndicator;

         // $('.storyTitle').html($('.storyTitleInput').val());

         console.log("html value is "+$('.storyTitle').html());

        if($('.afterPicEdit').val()==1){
         storyTitleInput = $('.storyTitle').html();
         storySummary = "null";
         type = "editStory";
         storyID= $('.storyTitleInput').data("storyid");
         console.log("Did it get here? Story title is "+storyTitleInput+" and storyid is "+$('.storyTitle').data("storyid")+" and user ID is "+$('.storyTitle').data("userid"));

         storyUpdateIndicator=1;
        } else {
         storyTitleInput = $('.storyTitleInput').val();
         storySummary = $('.storySummary').val();
         type = $('#createStoryButton').val();
         storyID= $('.storyTitleInput').data("storyid");

         storyUpdateIndicator=0;
        }
         
         // $('.save').prop('disabled',true);
         
         if (storyTitleInput==""){
             alert("Please enter the title of your story");
         } else if (storySummary==""){
             alert("Please enter a summary for your story");
         } 
         // else if (document.getElementById("uploadImage").files.length == 0){
         //    alert("Please upload a picture")
         // } 
         else {
        
        var objs = [];

        storyHolder = idGenerator(storyID, 0);
        objs.push([storyHolder,storyTitleInput,storySummary]);

        $('.storyTitle').html(storyTitleInput);
        $('.storyCreateHidden').addClass('storyCreateShow');
        $('.createStoryDiv').hide();

        var userid = $('.userid').val();
             
        // console.log("story id being sent is "+storyID+" and story title is "+storyTitleInput );
             var storyData = {
             'storyT': objs,
             'type':type, 
             'storyid':storyID,
             'storyUpdateIndicator':storyUpdateIndicator,
             'userid':userid,
         };
        //alert(storyData);
             
        $.ajax({
                type: "POST",
                data: storyData,
                url: "storyTitleProcessor.php",
                dataType: 'json',
                success: function(data, status){
        
                    $('.storyID').val(data.id);

                    if(data.storyImage){
                        console.log("Image path is "+data.storyImage);
                        $('.storyImage').prop("src",data.storyImage);
                    }

     if(data.pages){
        for(var i=0; i<data.pages.length; i++){
                // console.log("Length of all pages is "+data.pages.length+", Page ID is "+data.pages[i][0]+", Page Number is "+data.pages[i][1]);

                var optionsArr = [];

         for(var q=0; q<data.pages[i][3].length; q++){

             // console.log("Length of options is "+data.pages[i][3].length+" pushing option number "+data.pages[i][3][q][0]);

        if(optionID < data.pages[i][3][q][0]){
        optionID = data.pages[i][3][q][0];
            }

            optionsArr.push([data.pages[i][3][q][0], data.pages[i][3][q][1]]);

        }

    // var storyID = 99;
    pagesID = data.pages[i][1];

             pagesArray.push([data.pages[i][1],data.pages[i][2],optionsArr]);

             // console.log("On page Number "+i);     
                        }

        for(var w=0; w<data.link.length; w++){
            // console.log("link length is "+data.link.length+", pushing "+data.link[w][0]+", "+data.link[w][1]+" and "+data.link[w][2]);

        linkArray.push([data.link[w][0],data.link[w][1],data.link[w][2],0]);
                                }
        var linkAvailable = 1;

        if(!Array.isArray(linkArray) || !linkArray.length){
            linkAvailable = 0;
        }

        if(linkAvailable==1){
            $('.story').prop('disabled',true);
        
        $('.createPage').prop('disabled',true);
        
        $('.addOpt').prop('disabled',true);

        $('.save').prop('disabled',true);

        $('.delete').prop('disabled',true);

        $('.endPage').prop('disabled',true);
        }
                    }
                  
                }, 
                error: function(xhr, desc, err) {
                    console.log(xhr);
                    console.log(err);
                console.log("Details: " + desc + "\nError:" + err);
      }
            });
         }
    }
    
//  document.getElementById("createPage").addEventListener("click", createPageLink);
    
    var buttonIndex;
    
//    $('.createPage').click(function(){
//        console.log("come on come on!!!");
//    buttonIndex = $('.createPage').index(this);
//});
    
    var pageHolderId;
    
    function pageGenerator(){
        var optionsArr = [];
        
        pageHolderId = idGenerator(pagesID,1);
        
        $('.option').each(function(){
            //get Option ID
            getOptionID = idGenerator(optionID, 2);
           optionsArr.push([getOptionID, $(this).val()]); 
        });
        
        var storyContent = $('.story').val();
        
        pagesArray.push([pageHolderId,storyContent,optionsArr]);
            
        // BEGIN
        
        if (pagesArray.length>1){
            
        var optionNumber = $('.optIDspace').val();
        var prevOptionNumber = $('.prevOptIDspace').val();
            
            // console.log("in the create page function, option Number is "+optionNumber);
        
        var equ = false;
        var linkCheck = false;
        
            linkArray.push([optionNumber,prevOptionNumber,pageHolderId,0]);   
        }
    }
        // END

//End Story
    $('.endPage').on("click",function(){
        pageGenerator();

        $('.story').val("");
        
        $('.story').prop('disabled',true);
        
        $('.createPage').prop('disabled',true);

        $('.endPage').prop('disabled',true);
        
        $('.addOpt').prop('disabled',true);
        
        savePageChecker++;

        dCounter++;
        dbInsert();
    });
// End Story end

    var treeDisplayCount = 0;
    
    var savePageChecker = 0;
    
    $('.formStory').submit(function(event) {
        
        event.preventDefault();
        
        var optionCount = $('.optBox').length;
        
        if(optionCount < 2){
            alert("Please insert at least 2 options");
        } 
        else
            {
        // console.log("length of class is "+optionCount);

        pageGenerator();
        
        
        $('.story').val("");
        
        $('.story').prop('disabled',true);
        
        $('.createPage').prop('disabled',true);

        $('.endPage').prop('disabled',true);
        
        $('.addOpt').prop('disabled',true);
        
        savePageChecker++;
//        $('.option').each(function(){
//           $(this).val("");
//        });
        
        // Remove all added option boxes
        $('.optBox').remove();
        
        // console.log(pagesArray);
        
//        var timer = document.createElement('div');
//timer.innerHTML = months[month] + " " + day + ", " + year;
//document.getElementById('time').appendChild(timer);
        
        $('.tree').html("<div class='treeTitle'></div>");
        
        // Loop through pages array
        for(var treeLoop=0; treeLoop < pagesArray.length; treeLoop++){
            
            for(var pageLoop = 0; pageLoop < 3; pageLoop++){

                // If loop gets to page number ie [0]
                if(pageLoop==0){
                    var treeHeaderBar = document.createElement('div');
                    treeHeaderBar.className= "treeHeaderBar";
                    $(treeHeaderBar).html("<button type='button' class='treeHeaderBarBtn btn-block' value='"+pagesArray[treeLoop][pageLoop]+"'>"+pagesArray[treeLoop][pageLoop]+"</button>");
                    $('.treeTitle').append(treeHeaderBar);
                }
                
                // If loop gets to options array
                if(pageLoop==2){
                    var treeOptionsBar = document.createElement('div');
                            treeOptionsBar.className="treeOptsBar";
                    
                    // Loop through options
                    
                    for(var optHeader=0; optHeader < pagesArray[treeLoop][pageLoop].length; optHeader++)
                        {

                        if(optHeader==0){
                       $(treeOptionsBar).html("<button type='button' class='createPageOpt s1001-button3' value = '"+pagesArray[treeLoop][pageLoop][optHeader][0]+"'>"+pagesArray[treeLoop][pageLoop][optHeader][0]+"</button>");
                            $(treeHeaderBar).append(treeOptionsBar);
                        } else {
                            $(treeOptionsBar).append("<button type='button' class='createPageOpt s1001-button3' value = '"+pagesArray[treeLoop][pageLoop][optHeader][0]+"'>"+pagesArray[treeLoop][pageLoop][optHeader][0]+"</button>");
                            $(treeHeaderBar).append(treeOptionsBar);
                        }
                            
                        }
                }
            }
        }

        var editPageBtn = document.getElementsByClassName("treeHeaderBarBtn");
        
        for (var i = 0; i < editPageBtn.length; i++) {
    editPageBtn[i].addEventListener('click', editPageNum, false);
        }

        var createPage = document.getElementsByClassName("createPageOpt");
        
        for (var i = 0; i < createPage.length; i++) {
    createPage[i].addEventListener('click', editPage, false);
        }

        dCounter++;
        dbInsert();
    }
    });
    

    // Start of edit page on number click
    function editPageNum(){
        resetTree();

        $('.story').prop('disabled',false);
        $('.save').prop('disabled',false);
        $('.delete').prop('disabled',false);
        $('.endPage').prop('disabled',true);

        var selectedPageID=$(this).val();
        $('.pageIDspace').val(selectedPageID);

        $('.optIDspace').val(0);

        for(var q=0; q<pagesArray.length; q++){

        if(pagesArray[q][0]==selectedPageID){

            $('.story').val(pagesArray[q][1]);

            for(var edOpts=0; edOpts < pagesArray[q][2].length; edOpts++){
           $('.leStoryOpts').append("<input type='text' class='my-2 optBox option form-control' name='option' value='"+pagesArray[q][2][edOpts][1]+"' data-id='"+pagesArray[q][2][edOpts][0]+"'>");
        }
            break;
        }
    }

            $('.option').each(function(){
            //get Option ID
            var option_id = $(this).data("id");
            var indicateLink = 0;

            for(var linkLoop=0; linkLoop<linkArray.length; linkLoop++){

                

                if(linkArray[linkLoop][0]==option_id){
                    console.log("linkloop is "+linkArray[linkLoop][0]+" and option_id is "+option_id);

                    indicateLink=1;
                }
            }

            if(indicateLink==1){

                    console.log("Now checking linkloop");

                    $(this).after("<i class='fas fa-link linkme' data-toggle='modal' title='View Page' data-id='"+option_id+"' data-target='#myModal' id='linkme'></i>");
                } else {
                    $(this).after("<i class='fas fa-unlink linkme' data-toggle='modal' title='Link to page' data-id='"+option_id+"' data-target='#myModal' id='linkme'></i>");
                }

                var createPage = document.getElementsByClassName("linkme");

                for (var i = 0; i < createPage.length; i++) {
                            createPage[i].addEventListener('click', linkUp, false);
                                }
             
        });

            $('.addOpt').prop('disabled',false);
}
    
    
    // Start of edit page on option click

    function editPage(){
        var optionNumber = $(this).val();
        
        $('.story').prop('disabled',false);
        $('.save').prop('disabled',false);
        $('.delete').prop('disabled',false);
        
//        pageHolderId = idGenerator(pagesID,1);
        
//        pageGenerator(optionNumber);
        
        // console.log("Option Number is "+optionNumber);
        
        $('.optIDspace').val(optionNumber);
        $('.leStoryOpts').html("");
        
        var equ = false;
        var linkCheck = false;
        var hasPage = false;
        
        // Pages array contains details about a page.
        // Pages array = [Page Number, Page Content, Page Options]
        
        // Loop through each page Number Array
        loop1:
        for(var showPage=0; showPage < pagesArray.length; showPage++){
            
            // Loop through each page option
            loop2:
            for(var showOption=0; showOption < pagesArray[showPage][2].length; showOption++){
                
                // Check to see if option number is in pages array
                if(optionNumber == pagesArray[showPage][2][showOption][0]){

                    $('.prevOpt').html(pagesArray[showPage][2][showOption][1]);
                    
                    console.log("Page ID is "+pagesArray[showPage][0]+" and selected option is "+optionNumber);

                    $('.prevOptIDspace').val(pagesArray[showPage][0]);
                    
                    // Check if there is a link at all 
                    if (linkArray.length==0){
                        // console.log("Link length is zero");
                        $('.story').val("");
                    }
                        else {
                    
                    // Looping through Link array
                    loop3:
                    for(var j=0; j<linkArray.length; j++){
                        
                        // Checking link table to find the option match
                        
                            if (linkArray[j][0] == optionNumber){
                                
                                linkCheck = true;
                                
                                $('.pageIDspace').val(linkArray[j][2]);
                                
                                loop4:
                                for(var q=0; q<pagesArray.length; q++){
                                    if(pagesArray[q][0]==linkArray[j][2]){
                                        // console.log("pageNum is "+pagesArray[q][0]+" and link next page ID is "+linkArray[j][2]);
                                        
                                        //Display in tree
                                        // console.log(q+"times");
                                        
                                        $('.tree').html("<div class='treeTitle'></div>");
                                        
                                         var treeHeaderBar = document.createElement('div');
                                        treeHeaderBar.className= "treeHeaderBar";
                                        
                                        $(treeHeaderBar).html("<button type='button' class='treeHeaderBarBtn btn-block' value='"+linkArray[j][1]+"'>"+linkArray[j][1]+"</button>");
                                        
                                        $('.treeTitle').append(treeHeaderBar);
                                        
                                        var treeOptionsBar = document.createElement('div');
                                        treeOptionsBar.className="treeOptsBar";
                                        
                        for(var r=0; r<pagesArray.length; r++){
                                        if(pagesArray[r][0]==linkArray[j][1]){
                                        for(var optHeader=0; optHeader < pagesArray[r][2].length; optHeader++)
                        {
                            if(optHeader==0){
                       $(treeOptionsBar).html("<button type='button' class='createPageOpt s1001-button3' value = '"+pagesArray[r][2][optHeader][0]+"'>"+pagesArray[r][2][optHeader][0]+"</button>");
                            $(treeHeaderBar).append(treeOptionsBar);
                        } else {
                            $(treeOptionsBar).append("<button type='button' class='createPageOpt s1001-button3' value = '"+pagesArray[r][2][optHeader][0]+"'>"+pagesArray[r][2][optHeader][0]+"</button>");
                            $(treeHeaderBar).append(treeOptionsBar);
                        }
                        }
                                        }
                                    }
                                               
            var treeHeaderBar = document.createElement('div');
            treeHeaderBar.className= "treeHeaderBar";
                                    
            $(treeHeaderBar).html("<button type='button' class='treeHeaderBarBtn btn-block' value='"+linkArray[j][2]+"'>"+linkArray[j][2]+"</button>");
                                        
            $('.treeTitle').append(treeHeaderBar);
                                        
            var treeOptionsBar = document.createElement('div');
            treeOptionsBar.className="treeOptsBar";
                                        
        for(var optHeader=0; optHeader < pagesArray[q][2].length; optHeader++)
                        {
                            if(optHeader==0){
        $(treeOptionsBar).html("<button type='button' class='createPageOpt s1001-button3' value = '"+pagesArray[q][2][optHeader][0]+"'>"+pagesArray[q][2][optHeader][0]+"</button>");
        $(treeHeaderBar).append(treeOptionsBar);
                        } else {
        $(treeOptionsBar).append("<button type='button' class='createPageOpt s1001-button3' value = '"+pagesArray[q][2][optHeader][0]+"'>"+pagesArray[q][2][optHeader][0]+"</button>");
                            $(treeHeaderBar).append(treeOptionsBar);
                        }
                        }
         
                    // console.log("This should be displayed\n"+pagesArray[q][1]);
                            
                    $('.story').val(pagesArray[q][1]);

                    // console.log("Set page id is "+$('.pageIDspace').val()+" and other is "+pagesArray[q][0]);

        for(var edOpts=0; edOpts < pagesArray[q][2].length; edOpts++){
            $('.leStoryOpts').append("<input type='text' class='my-2 optBox option form-control' name='option' value='"+pagesArray[q][2][edOpts][1]+"' data-id='"+pagesArray[q][2][edOpts][0]+"'>");

            console.log("page option id is "+pagesArray[q][2][edOpts][0]);
                        }    
                             // $('.save').prop('disabled',false);           
                                        break loop1;
                                    }
                                }
                            } 
                            // End of link check to find the option match
                            else {
                                $('.story').val("");
                            }
                    }
                    // End of loop through link array
                
                    }    
                    // End of check to see if there is a link array
                }
                // End of check to see if option number is in pages array
            }
            // End of loop through options of pages array
        }
        // End of loop through pages array

        var editPageBtn = document.getElementsByClassName("treeHeaderBarBtn");

        // Check if selected option has a page already
        // for(var t=0; t<hasPageArray.length; t++){
        //     if (optionnumber == hasPageArray[t]){
        //         hasPage = true;
        //     }
        // }
        
        for (var i = 0; i < editPageBtn.length; i++) {
            editPageBtn[i].addEventListener('click', editPageNum, false);
                    }        
                                        
        var createPage = document.getElementsByClassName("createPageOpt");
        
        for (var i = 0; i < createPage.length; i++) {
                            createPage[i].addEventListener('click', editPage, false);
            }
                                       
                               

        if(linkCheck==false){
            $('.pageIDspace').val("null");
            // $('.endPage').prop('disabled',true);
        }

        if(linkCheck==false){
            $('.endPage').prop('disabled',false);
        }

        $('.option').each(function(){
            //get Option ID
            var option_id = $(this).data("id");
            var indicateLink = 0;

            for(var linkLoop=0; linkLoop<linkArray.length; linkLoop++){

                if(linkArray[linkLoop][0]==option_id){

                    indicateLink=1;
                }
            }

            if(indicateLink==1){

            $(this).after("<i class='fas fa-link linkme' data-toggle='modal' title='View Page' data-id='"+option_id+"' data-target='#myModal' id='linkme'></i>");
                } else {
                    $(this).after("<i class='fas fa-unlink linkme' data-toggle='modal' title='Link to page' data-id='"+option_id+"' data-target='#myModal' id='linkme'></i>");
                }


                var createPage = document.getElementsByClassName("linkme");

                for (var i = 0; i < createPage.length; i++) {
                            createPage[i].addEventListener('click', linkUp, false);
                                }
             
        });

        $('.addOpt').prop('disabled',false);
    }
    // End of edit story


// Link Option function 

var prevPageId;

    function linkUp(){
        var optionid = $(this).data('id');

        console.log("Option ID is "+optionid);

        var isLinked = 0;

        for(var linkLoop=0; linkLoop<linkArray.length; linkLoop++){
            if(optionid==linkArray[linkLoop][0]){
                console.log("Loop Option ID is "+optionid+" and link array option is "+linkArray[linkLoop][0]);
                isLinked = 1;

                break;
            }
        }

        if(isLinked==1){
            $('.linkOption').html("<div class='row'><span style='padding: 5px;'>View Page</span></div><button type='button' class='s1001-button3 mt-3 createPageOpt' value = '"+optionid+"' data-dismiss='modal'>View Page</button>"); 

            var createPage = document.getElementsByClassName("createPageOpt");
        
                    for (var i = 0; i < createPage.length; i++) {
                        createPage[i].addEventListener('click', editPage, false);
                            }
        } else {
            $('.linkOption').html("<div class='row modalPageTitle' style='padding: 5px;'>Choose a page you want to link this option to</div>");

            loop1:
            for(var pageLoop=0; pageLoop<pagesArray.length; pageLoop++){
                loop2:
                for(var optLoop=0; optLoop<pagesArray[pageLoop][2].length; optLoop++){
                    var showPageId = 1;

                    if(pagesArray[pageLoop][2][optLoop][0]==optionid){
                        prevPageId = pagesArray[pageLoop][0];

                        showPageId = 0;

                        break loop2;
                    } 

                    if(showPageId==1) {
                        $('.modalPageTitle').append("<button class='s1001-button3 btn-block confirmLinkBtn' type='button' data-toggle='modal' data-target='#myModal2' data-id='"+pagesArray[pageLoop][0]+"' data-optionid='"+optionid+"'>"+pagesArray[pageLoop][0]+"</button><br>");

                        break loop2;
                    }
                }
            }

            var confirmLinkBtn = document.getElementsByClassName("confirmLinkBtn");
            for (var i = 0; i < confirmLinkBtn.length; i++) {
                            confirmLinkBtn[i].addEventListener('click', confirmLink, false);
                                }
             
        }
    }
    // End of link option function


// Confirm Link 1
    function confirmLink(){
        var linked=0;
        var nextPageid = $(this).data('id');
        var optionnumber = $(this).data('optionid');

        // console.log("Option ID: "+optionnumber+"\nPrevious Page ID: "+prevPageId+"\nNext Page ID: "+nextPageid);

        $('.optionnum').html(optionnumber);
        $('.previd').html(prevPageId);
        $('.nextid').html(nextPageid);

        $('.optionnum').val(optionnumber);
        $('.previd').val(prevPageId);
        $('.nextid').val(nextPageid);
    }

// Confirm Link 2
    function confirmLink2(){
        var linked=0;
        var nextPageid = $('.nextid').val();
        var optionnumber = $('.optionnum').val();
        var prevPageId2 = $('.previd').val();

        dCounter = 0;

        console.log("Option ID: "+optionnumber+"\nPrevious Page ID: "+prevPageId2+"\nNext Page ID: "+nextPageid);

        for(var linkLoop=0; linkLoop<linkArray.length; linkLoop++){
            if(linkArray[linkLoop][0]==optionnumber){
                linked=1;

                alert("This Option has already been linked!");
                break;
            }
        }

        if(linked==0){
            linkArray.push([optionnumber,prevPageId2,nextPageid,0]);

            dCounter++;

            dbInsert();
        }
    }

// End of confirm link


    $('.story').on('keyup change', function() {
        var base = 0;
        
        for(var spcLink = 0; spcLink < linkArray.length; spcLink ++){
            if(linkArray[spcLink][0]==$('.optIDspace').val()){
              base = 1;
            } 
        }
        
        if (base == 0){
            $('.createPage').prop('disabled',false);
            $('.addOpt').prop('disabled',false);
        }else{
            // $('.save').prop('disabled',false);  
        }
    });




// RESET

    $('.resetTree').on("click",resetTree);

        function resetTree(){
        $('.tree').html("<div class='treeTitle'></div>");
        
        for(var treeLoop=0; treeLoop < pagesArray.length; treeLoop++){
            
            for(var pageLoop = 0; pageLoop < 3; pageLoop++){
                if(pageLoop==0){
                    var treeHeaderBar = document.createElement('div');
                    treeHeaderBar.className= "treeHeaderBar";
                    $(treeHeaderBar).html("<button type='button' class='treeHeaderBarBtn btn-block' value='"+pagesArray[treeLoop][pageLoop]+"'>"+pagesArray[treeLoop][pageLoop]+"</button>");
                    $('.treeTitle').append(treeHeaderBar);
                }
                
                // If loop gets to options array
                if(pageLoop==2){
                    var treeOptionsBar = document.createElement('div');
                            treeOptionsBar.className="treeOptsBar";
                    
                    // Loop through options
                    for(var optHeader=0; optHeader < pagesArray[treeLoop][pageLoop].length; optHeader++)
                        {
                  
                       // console.log("option length is "+pagesArray[treeLoop][pageLoop].length);
                        if(optHeader==0){
                       $(treeOptionsBar).html("<button type='button' class='createPageOpt s1001-button3' value = '"+pagesArray[treeLoop][pageLoop][optHeader][0]+"'>"+pagesArray[treeLoop][pageLoop][optHeader][0]+"</button>");
                            $(treeHeaderBar).append(treeOptionsBar);
                        } else {
                            $(treeOptionsBar).append("<button type='button' class='createPageOpt s1001-button3' value = '"+pagesArray[treeLoop][pageLoop][optHeader][0]+"'>"+pagesArray[treeLoop][pageLoop][optHeader][0]+"</button>");
                            $(treeHeaderBar).append(treeOptionsBar);
                        }  
                    }
                    // End of loop through options
                }
            }
        }

        var editPageBtn = document.getElementsByClassName("treeHeaderBarBtn");
        
                for (var i = 0; i < editPageBtn.length; i++) {
                editPageBtn[i].addEventListener('click', editPageNum, false);
                    }    
                    
                     var createPage = document.getElementsByClassName("createPageOpt");
        
                    for (var i = 0; i < createPage.length; i++) {
                        createPage[i].addEventListener('click', editPage, false);
                            }

        $('.story').val("");
        $('.leStoryOpts').html("");
        $('.story').prop('disabled',true);
        $('.endPage').prop('disabled',true);

    }

    // END OF RESET TREE

            $('.submitPicture').submit(function(event) {
                
         if (document.getElementById("uploadImage").files.length == 0){
                    event.preventDefault();
                    alert("Please upload a picture");
                }
        });
    
    // setInterval(function(){
    //     // console.log("Link array is "+linkArray);

    //     dbInsert();
        
        
    // }, 10000);

    function dbInsert(){
        if(dCounter < 1){
        } else {

        var linkAvailable = 1;

        if(!Array.isArray(linkArray) || !linkArray.length){
            linkAvailable = 0;
        }

        var storyData = {
            'storyT' : $('.storyID').val(),
            'pages' : pagesArray,
            'links' : linkArray,
            'linkAvailable' : linkAvailable,
        };
                
                // console.log("Story ID stored is: "+$('.storyID').val());
        
        $.ajax({
                type: "POST",
                data: storyData,
                url: "storyProcessor.php",
            });
                
                for(var saveReset = 0; saveReset < linkArray.length; saveReset++){
                    linkArray[saveReset][3] = 0;
                }
            
        }
    }
});