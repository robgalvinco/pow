// events
(function () {

    document.addEventListener("DOMContentLoaded", function () {
        // open widget on load
        var widget = document.querySelector('.pow-widget[data-pow-onload]');
        if (widget != null) {
            var openDelay = 0;
            if (widget.dataset.lwOnload.length) {
                openDelay = widget.dataset.lwOnload;
            }
            setTimeout(function () {
                showWidget(widget);
            }, openDelay);
        }
    });

    // open widget on click
    document.addEventListener('click', function (e) {
        if ('lwOnclick' in e.target.dataset) {
            var widget = document.querySelector(e.target.dataset.lwOnclick);
            showWidget(widget);
        }
    });

    // open widget on scroll page
    var onscrollTriggers = document.querySelectorAll('[data-pow-onscroll]');
    if (onscrollTriggers.length) {
        window.addEventListener('scroll', function (e) {
            onscrollTriggers.forEach(function (item) {
                if (!item.classList.contains('pow-inited')) {
                    var windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    if (windowScrollTop + window.innerHeight >= item.offsetTop) {
                        var widget = document.querySelector(item.dataset.lwOnscroll);
                        showWidget(widget);
                        item.classList.add('pow-inited');
                    };
                };
            });
        });
    };

    // close widget
    var openFlag = true,
        pressedEscape = false;

    document.addEventListener('click', closeWidget);
    document.addEventListener('touchstart', closeWidget);
    document.addEventListener('keydown', function (e) {
        closeWidget(e);
    });

    function closeWidget(e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            pressedEscape = true;
        } else {
            pressedEscape = false;
        }
        if ('lwClose' in e.target.dataset) {
            e.preventDefault();
        }
        if ('lwClose' in e.target.dataset || pressedEscape) {
            if (openFlag) {
                var hideItem = function hideItem(item) {
                    item.classList.remove('pow-visible');
                    item.classList.add('pow-animate-reverse');
                    setTimeout(function () {
                        item.classList.remove('pow-animate-reverse');
                    }, 400);
                };

                var hideWidget = function hideWidget() {
                    if (powered != undefined) {
                        powered.classList.remove('pow-visible');
                        powered.classList.add('pow-animate-reverse');
                    }
                    setTimeout(function () {
                        widget.classList.remove('pow-animate');
                        setTimeout(function () {
                            widget.classList.remove('pow-open');
                            if (powered != undefined) {
                                powered.classList.remove('pow-animate-reverse');
                            }
                            openFlag = true;
                            items.forEach(function (item) {
                                if (items.length > 1) {
                                    item.animate([{ height: 0, marginTop: 0 }, { height: item.dataset.height, marginTop: item.dataset.marginTop }], {
                                        duration: 0,
                                        fill: 'forwards'
                                    });
                                }
                                setTimeout(function () {
                                    item.classList.remove('pow-animated');

                                    if (items.length > 1) {
                                        delete item.dataset.height;
                                        delete item.dataset.marginTop;
                                    }
                                }, 10);
                            });
                        }, 400);
                    }, 400);
                };

                var widget = undefined;
                if (pressedEscape) {
                    widget = document.querySelector('.pow-widget.pow-open');
                } else {
                    widget = getParents(e.target, '.pow-widget')[0];
                }

                var overlay = widget.querySelector('.pow-overlay'),
                    items = widget.querySelectorAll('.pow-item'),
                    powered = widget.querySelector('.pow-powered');

                if (e.target.classList.contains('pow-overlay') || pressedEscape) {
                    openFlag = false;
                    items.forEach(function (item) {
                        if (!item.classList.contains('pow-animated')) {
                            hideItem(item);
                        }
                        hideWidget();
                    });
                } else {
                    var visibleItems = widget.querySelectorAll('.pow-item.pow-visible'),
                        item = getParents(e.target, '.pow-item')[0];

                    item.classList.add('pow-animated');
                    hideItem(item);
                    if (visibleItems.length > 1) {
                        item.animate([{ height: item.dataset.height, marginTop: item.dataset.marginTop }, { height: 0, marginTop: 0 }], {
                            delay: 400,
                            duration: 300,
                            fill: 'forwards'
                        });
                    }

                    if (visibleItems.length == 1) {
                        hideWidget();
                    }
                }
            }
        }
    }

    function showWidget(widget) {
        var overlay = widget.querySelector('.pow-overlay'),
            items = widget.querySelectorAll('.pow-item'),
            powered = widget.querySelector('.pow-powered');

        widget.classList.add('pow-open');
        setTimeout(function () {
            widget.classList.add('pow-animate');
            if (powered != undefined) {
                powered.classList.add('pow-animate');
                setTimeout(function () {
                    powered.classList.remove('pow-animate');
                    powered.classList.add('pow-visible');
                }, 400);
            }
        }, 10);

        items.forEach(function (item) {
            item.classList.add('pow-animate');
            setTimeout(function () {
                item.classList.remove('pow-animate');
                item.classList.add('pow-visible');
                if (items.length > 1) {
                    if (!item.dataset.height) {
                        item.dataset.height = window.getComputedStyle(item).height;
                    }
                    if (!item.dataset.marginTop) {
                        item.dataset.marginTop = window.getComputedStyle(item).marginTop;
                    }
                }
            }, 400);
        });
    };
})();

// button ripple effect
(function () {
    document.addEventListener('click', function (e) {
        var btn = e.target;
        if ('lwRipple' in btn.dataset) {
            var removeRipple = function removeRipple() {
                ripple.parentNode.removeChild(ripple);
            };

            var offset = e.target.getBoundingClientRect(),
                x = e.clientY - offset.top,
                y = e.clientX - offset.left,
                ripple = document.createElement('span');

            ripple.classList.add('pow-ripple');
            ripple.style = 'top: ' + x + 'px; left: ' + y + 'px; width: ' + btn.offsetWidth * 2.2 + 'px; height: ' + btn.offsetWidth * 2.2 + 'px';

            btn.appendChild(ripple);

            lwCssAnimationIsEnd(ripple, removeRipple);
        }
    });
})();

// 
function lwCssAnimationIsEnd(el, callback) {
    el.addEventListener('webkitAnimationEnd', callback, false);
    el.addEventListener('animationend', callback, false);
    el.addEventListener('oanimationend', callback, false);
}

function lwCssTransitionIsEnd(el, callback) {
    el.addEventListener('webkitTransitionEnd', callback, false);
    el.addEventListener('transitionend', callback, false);
    el.addEventListener('otransitionend', callback, false);
}

/**
 * Get all DOM element up the tree that contain a class, ID, or data attribute
 * @param  {Node} elem The base element
 * @param  {String} selector The class, id, data attribute, or tag to look for
 * @return {Array} Null if no match
 */
var getParents = function getParents(elem, selector) {

    var parents = [];
    var firstChar;
    if (selector) {
        firstChar = selector.charAt(0);
    }

    // Get matches
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (selector) {

            // If selector is a class
            if (firstChar === '.') {
                if (elem.classList.contains(selector.substr(1))) {
                    parents.push(elem);
                }
            }

            // If selector is an ID
            if (firstChar === '#') {
                if (elem.id === selector.substr(1)) {
                    parents.push(elem);
                }
            }

            // If selector is a data attribute
            if (firstChar === '[') {
                if (elem.hasAttribute(selector.substr(1, selector.length - 1))) {
                    parents.push(elem);
                }
            }

            // If selector is a tag
            if (elem.tagName.toLowerCase() === selector) {
                parents.push(elem);
            }
        } else {
            parents.push(elem);
        }
    }

    // Return parents if any exist
    if (parents.length === 0) {
        return null;
    } else {
        return parents;
    }
};