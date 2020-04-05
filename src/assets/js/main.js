const IMG_PATH = window.location.origin + '/assets/images/'
const features = $('.features');
const personalProjects = $('.projects--personal');
const skills = $('.skillset');
// const features = document.querySelector('.features');

$.getJSON('../portfolio.json', function (data) {
    data.features.forEach(feature => {
        features.append(`
        <article class="col-12 col-md-6 col-lg-3" data-aos="flip-up">
            <div class="card card--feature">
                <header class="card-header">
                    <i class="${feature.icon} fa-4x"></i>
                </header>
                <div class="card-body">
                    <h4 class="feature-title">${feature.title}</h4>
                    <p class="feature-desc">${feature.desc}</p>
                </div>
            </div>
        </article>
        `)
        equalHeights('feature-title');
        equalHeights('feature-desc');


    });
    data.projects.personal.forEach(project => {
        personalProjects.append(`
        <article class="col-12 col-md-6 col-lg-4" data-aos="zoom-in">
        <div class="card card--project bone">
            <header class="card-header">
                <img class="img-fluid activator" src="build/imgs/${project.img}">
            </header>
            <div class="card-body">
                <span class="card-title activator text-coal">${project.name}
                    <i class="material-icons right">more_vert</i>
                </span>
                <p>

                </p>
            </div>
            <footer class="card-footer">
                <a href="${project.demo}" target="_blank" class="btn btn-primary">View
                    Demo
                </a>
                ${project.repo ? `<a href="${project.repo}" class="btn btn-primary" target="_blank">View
                Github
                </a>` : ''}
                
            </footer>
            <div class="card-reveal bone">
                <span class="card-title card-close text-coal card-close">${project.name}
                    <i class="material-icons right">close</i>
                </span>
                <p class="text-coal">${project.desc}
                </p>
            </div>
        </div>
    </article>
        `)
    });

    data.skills.forEach(skill => {
        skills.append(`<article class="col-12 col-sm-6 col-md-4" data-skill="${skill.category}">
        <div class="card card--skill">
            <header class="card-header">
                <img src="build/imgs/${skill.icon}.png" alt="">
            </header>
            <div class="card-body">
                <h4 class="skill-name">${skill.name}</h4>
            </div>
        </div>
    </article>`)
    })
})


$(document).on('click', '.activator', function () {
    let cardReveal = $(this).parent().parent().find('.card-reveal');

    cardReveal.show(200);
    cardReveal.css('transform', 'translateY(-100%)');
});
$(document).on('click', '.card-close', function (e) {
    let cardReveal = $(this).parent().parent().find('.card-reveal');
    cardReveal.css('transform', 'translateY(0%)');
    cardReveal.hide(200);
})



function equalHeights(className) {
    var findClass = document.getElementsByClassName(className);
    var tallest = 0;
    // Loop over matching divs
    for (i = 0; i < findClass.length; i++) {
        var ele = findClass[i];
        var eleHeight = ele.offsetHeight;
        tallest = (eleHeight > tallest ? eleHeight : tallest); /* look up ternary operator if you dont know what this is */
    }
    for (i = 0; i < findClass.length; i++) {
        findClass[i].style.height = tallest + "px";
    }
}

$(document).on('click', '.category-toggle', function (e) {
    e.preventDefault();
    $('.categories').toggle(200);
})

$(document).on('click', '[data-target-category]', function (e) {
    $('.category-toggle').text($(this).text());
    let category = $(this).data('targetCategory');
    $('[data-skill]').each(function (i, el) {
        if ($(el).data('skill') == category) {
            $(el).show(200);
        } else {
            $(el).hide(200);
        }

        if (category == "all") {
            $(el).show(200);
        }
    })

    $('.category-toggle').trigger('click');
})

$(document).on('click', '.menu-nav-btn', function (e) {
    $('body').toggleClass('menu-is-open');
    $('#menu-nav').toggleClass('open');
})

$(document).on('click', '#menu-nav', function (e) {
    $(this).toggleClass('open');
    $(body).toggleClass('menu-is-open');
})
$(document).on('click', '.mobile-nav', function (e) {
    e.stopPropagation();
})
$(document).on('click', '.menu-close', function (e) {
    $('#menu-nav').toggleClass('open');
    $(body).toggleClass('menu-is-open');
})
$(document).on('click', '.mobile-nav .nav-item', function (e) {
    $('#menu-nav').toggleClass('open');
    $(body).toggleClass('menu-is-open');
})