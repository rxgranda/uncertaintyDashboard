Template.qualitywidget.helpers({
  quality: function() {
    var quality = Math.round(Session.get("qualityValue")*100);
    return parseInt(quality) || 0;
  },
  qualityText: function() {
    var quality = Session.get("qualityValue");
    var text;
    if (quality >= 0.0) text = "Very Poor";
    if (quality >= 0.2) text = "Poor";
    if (quality >= 0.4) text = "Fair";
    if (quality >= 0.6) text = "Good";
    if (quality >= 0.8) text = "Very Good";
    return text;
  },
  qualityColor: function() {
    var quality = Session.get("qualityValue");
    if (quality >= 0.0) $(".quality-bubble > #svgCircle").css("stroke","#e74c3c");
    if (quality >= 0.2) $(".quality-bubble > #svgCircle").css("stroke","#e67e22");
    if (quality >= 0.4) $(".quality-bubble > #svgCircle").css("stroke","#f1c40f");
    if (quality >= 0.6) $(".quality-bubble > #svgCircle").css("stroke","#27ae60");
    if (quality >= 0.8) $(".quality-bubble > #svgCircle").css("stroke","#25a085");
    return quality;
  }
});

Template.qualitywidget.rendered = function () {
  setTimeout(function() {
    var quality = Session.get("qualityValue");
    if (quality >= 0.0) $(".quality-bubble > #svgCircle").css("stroke","#e74c3c");
    if (quality >= 0.2) $(".quality-bubble > #svgCircle").css("stroke","#e67e22");
    if (quality >= 0.4) $(".quality-bubble > #svgCircle").css("stroke","#f1c40f");
    if (quality >= 0.6) $(".quality-bubble > #svgCircle").css("stroke","#27ae60");
    if (quality >= 0.8) $(".quality-bubble > #svgCircle").css("stroke","#25a085");
  },1300);
};
