
// A simplistic tooltip
// tooltipattr = HTML element attribute to look for tooltip content to display
// tooltipclass = Class name added to HTML elements (hook for mouseover and mouseleave messages)
// Requiers tinytipclass class (site.css)

var BareboneTip = (function () {

    function BareboneTip(tooltipattr, tooltipclass) {
        var self = this;

        self.TargettingClass = tooltipclass;

        self.TooltipContainer = $('<div class="tinytipclass"></div>').on('mouseenter', function (e) { $(this).hide(); }).appendTo('body');

        self.TooltipAttr = tooltipattr;

        self.HighlightRows = false;
        self.HighLightedCell = undefined;

        self.HookTooltips = function () {
            $('.' + self.TargettingClass)
                .on('mouseover', function (e) {
                    if (e.target) {
                        var $tmp = $(e.target);
                        var tip = $tmp.attr(self.TooltipAttr);
                        var tname = undefined;

                        if (self.HighlightRows) {
                            tname = $tmp.parent()[0].tagName;

                            if ((e.target.tagName == 'SPAN') || (e.target.tagName == 'BUTTON') || (e.target.tagName == 'INPUT')) {
                                if (tname == 'TD') {
                                    self.HighLightedCell = $tmp.parent().parent();
                                } else if (tname == 'TH') {
                                    self.HighLightedCell = $tmp.parent();
                                }
                            } else if (e.target.tagName == 'TD') {
                                self.HighLightedCell = $tmp.parent();
                            } else if (e.target.tagName == 'TH') {
                                self.HighLightedCell = $tmp;
                            }

                            if (self.HighLightedCell) {
                                self.HighLightedCell.addClass('rowheaderhovercolor');
                            }
                        }

                        if ((tip) && (tip.length) && (tip.length > 0)) {
                            self.TooltipContainer.html(tip.replace(/\n/g, "<br />"));

                            var tope = $tmp.offset().top;
                            var lefte = $tmp.offset().left;
                            var width = $tmp.outerWidth();
                            var height = self.TooltipContainer.outerHeight();

                            lefte = lefte + (width / 2);
                            lefte = lefte - (self.TooltipContainer.outerWidth() / 2);
                            if (lefte < 0) {
                                lefte = 0;
                            }
                            var tmp = $(window).width() - (lefte + width);
                            if (tmp < 0) {
                                lefte = lefte + tmp;
                            }

                            tope = tope - height - 2;
                            if (tope < 0) {
                                tope = $tmp.offset().top + $tmp.height() + 2;
                            }
                            self.TooltipContainer.css({ left: lefte, top: tope }).show();
                        }
                    }
                }).on('mouseleave', function (e) {
                    self.TooltipContainer.hide();
                    if (self.HighLightedCell) {
                        self.HighLightedCell.removeClass('rowheaderhovercolor');
                        self.HighLightedCell = undefined;
                    }
                });
        }

        self.UnHookTooltips = function () {
            $('.' + self.TargettingClass).off('mouseover').off('mouseleave');
        }
    }

    return BareboneTip;
})();