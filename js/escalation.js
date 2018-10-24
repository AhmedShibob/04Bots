$(document).ready(function(){

    $('.nav-link').click(function(){
        $('#nav-applications-tab').removeClass('applications-blue');
    });

     $('body').on('click', '#nav-applications-tab', function(){
        console.log('lololol');
        $('#nav-applications-tab').toggleClass('applications-blue');
     });


});


$(document).ready(function () {


    $('#myDropdown').on('show.bs.dropdown', function () {
        // do something…
        $('.escalationHeader-filter-div').addClass('escalationHeader-filter-div_color');
      });
    $('#myDropdown').on('hidden.bs.dropdown	', function () {
        // do something…
        $('.escalationHeader-filter-div').removeClass('escalationHeader-filter-div_color');
      });
    $('#myDropdown1').on('show.bs.dropdown', function () {
        // do something…
        $('.escalationHeader-filter-div').addClass('escalationHeader-filter-div_color');
      });
    $('#myDropdown1').on('hidden.bs.dropdown	', function () {
        // do something…
        $('.escalationHeader-filter-div').removeClass('escalationHeader-filter-div_color');
      });


    let data = {
        stages: [{
            'text':'المسئول المباشر',
            'date':'2016-10-01'
        },
        {
            'text':'المسئول المباشر 1',
            'date':'2016-10-01'
        },
        {
            'text':'المسئول المباشر21',
            'date':'2016-10-01'
        },{
            'text':'تم القبول',
            'date':'2016-10-01',
            status:'approved'
        }],
        currentStage:'تم القبول'
    }
    ProgressBar.init(
       data.stages,
        data.currentStage,
        'progress-bar-wrapperapp'
    );

    let data2 = {
        stages: [{
            'text':'المسئول المباشر',
            'date':'2016-10-01'
        },
        {
            'text':'المسئول المباشر 1',
            'date':'2016-10-01'
        },
        {
            'text':'المسئول المباشر21',
            'date':'2016-10-01'
        },{
            'text':'تم الرفض',
            'date':'2016-10-01',
            status:'rejected'
        }],
        currentStage:'تم الرفض'
    }
    ProgressBar.init(
       data2.stages,
        data2.currentStage,
        'progress-bar-wrapper1app'
    );


    ProgressBar.singleStepAnimation = 1500;
    ProgressBar.init(
        [{
            'text':'المسئول المباشر',
            'date':'2016-10-01'
        },{
            'text':'المسئول المباشر 1',
            'date':'2016-10-01'
        },{
            'text':'مدير الموارد البشرية',
            'date':'2016-10-01'
        }],
        'المسئول المباشر 1',
        'progress-bar-wrapper'
    );

    ProgressBar.singleStepAnimation = 1500;

    ProgressBar.init(
        [{
            'text':'المسئول المباشر',
            'date':'2016-10-01'
        },{
            'text':'المسئول المباشر 1',
            'date':'2016-10-01'
        },{
            'text':'مدير الموارد البشرية',
            'date':'2016-10-01'
        }],
        'مدير الموارد البشرية',
        'progress-bar-wrapper1'
    );

    ProgressBar.singleStepAnimation = 1500;
    ProgressBar.init(
        [{
            'text':'المسئول المباشر',
            'date':'2016-10-01'
        },{
            'text':'المسئول المباشر 1',
            'date':'2016-10-01'
        },{
            'text':'مدير الموارد البشرية',
            'date':'2016-10-01'
        }],
        'مدير الموارد البشرية',
        'progress-bar-wrapper2'
    );

    ProgressBar.singleStepAnimation = 1500;

});