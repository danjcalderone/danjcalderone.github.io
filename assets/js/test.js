import {
  CanvasSpace,
  HTMLSpace,
  SVGSpace,
  DOMSpace,
  Pt,
  Group,
  Circle,
  Bound,
  Typography,
  Line,
  Rectangle,
  Num,
  Polygon,
  Create,
  Const,
  Mat,
  Curve,
  Geom,
  Triangle,
  Util,
  UI,
  UIDragger,
  UIButton,
  Vec
} from "pts";

Pts.namespace(window);
var space = new CanvasSpace("#hello");
space.setup({ bgcolor: "#fff" });
var form = space.getForm();
space.add({
  animate: (time, ftime) => {
    var rect = Rectangle.fromCenter(space.center, space.size.$divide(3));
    var poly = Rectangle.corners(rect);
    poly.shear2D((Num.cycle((time % 5000) / 5000) - 0.5) / 2, space.center);
    var tris = poly.segments(2, 1, true);
    tris.map((t) => t.push(space.pointer));
    var circles = tris.map((t) => Triangle.incircle(t));
    var circums = tris.map((t) => Triangle.circumcircle(t));
    form.fillOnly("rgba(255,255,255,.2)", 1).circles(circums);
    form.fillOnly("#123").polygon(poly);
    form.fill("#f03").circles(circles);
    form.strokeOnly("#fff ", 3).polygons(tris);
    form.fill("#123").point(space.pointer, 5);
  }
});
space.bindMouse().bindTouch().play();
