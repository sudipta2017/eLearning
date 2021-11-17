$(function () {
    setNavbar();
    setInitPage();
    setCopyright();
});

getSetting = (setting, callback) => {
    $.getJSON("./settings.json", function (data) {
        $.each(data, function (key, val) {
            if (key === setting) callback(val);
        });
    });
}

getNavItem = (pageName, callback) => {
    getSetting('navItems', function (navItems) {
        $.each(navItems, function (_, navItem) {
            if (navItem.name === pageName) callback(navItem);
        })
    })
}

setInitPage = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const pageName = searchParams.get('link');
    if (!!!pageName) {
        getSetting('landingPage', function (landingPage) {
            activatePage(landingPage);
        });
    } else {
        activatePage(pageName);
    }
}

activatePage = (pageName) => {
    getNavItem(pageName, function (navItem) {
        getSetting('yourName', function (val) {
            const title = `${navItem.display} - ${val}`;
            $("title").text(title);
            window.history.pushState(val, title, `/?link=${pageName}`);
        });
        $('a.nav-item.nav-link').removeClass('active');
        $('a.nav-item.nav-link>span.sr-only').remove();
        $(`a.nav-item.nav-link[href='?link=${pageName}']`)
            .addClass('active')
            .append('<span class="sr-only">(current)</span>');
        $.get(navItem.link, function (html) {
            $('#pageContents').html(html);
        });
    });
}

$(document).on("click", "a.nav-item.nav-link", function (e) {
    e.preventDefault();
    const searchParams = new URLSearchParams($(this).attr('href'));
    const pageName = searchParams.get('link');
    activatePage(pageName);
});

setNavbar = () => {
    getSetting('yourName', function (yourName) {
        $(".navbar-brand").text(yourName);
    });
    getSetting('navItems', function (navItems) {
        $.each(navItems, function (_, navItem) {
            $("#navbarRoot")
                .append(`<a class="nav-item nav-link" href="?link=${navItem.name}" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">${navItem.display}</a>`);
        })
    });
}

setCopyright = () => {
    getSetting('yourName', function (yourName) {
        $("#copyright").html(`Copyright &copy; ${new Date().getFullYear()} ${yourName}. All rights reserved.`);
    });
}
