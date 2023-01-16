import type { Vec3 } from "$lib/util/vector"

type UpdateCallback<Extra> = (ctx: CanvasRenderingContext2D, delta: number, brush: Brush<Extra> ) => void
type ShapeCallback<Extra> = (ctx: CanvasRenderingContext2D, brush: Brush<Extra>) => void

interface BrushOptions<Extra> {
    shape?: ShapeCallback<Extra>
    update?: UpdateCallback<Extra>
    extra?: Extra
}

export class Brush<Extra> {
    position: Vec3
    velocity: Vec3
    radiusX: number
    radiusY: number
    rotation: number
    color: string
    shape: ShapeCallback<Extra> = (ctx, brush) => {
        const [x, y, z] = brush.position.parts;
        ctx.ellipse(x, y, Math.max(brush.radiusX - z, 0), Math.max(brush.radiusY - z, 0), brush.rotation, 0, 2 * Math.PI, false);
    }
    update: UpdateCallback<Extra> = (ctx, delta, brush) => {
        this.position = this.position.add(this.velocity.scale(delta))
    }
    extra?: Extra

    constructor(position: Vec3, velocity: Vec3, radiusX: number, radiusY: number, rotation: number, color: string, options?: BrushOptions<Extra>) {
        this.position = position
        this.velocity = velocity
        this.radiusX = radiusX
        this.radiusY = radiusY
        this.rotation = rotation
        this.color = color
        if (options) {
            const { shape, update, extra } = options;
            if (shape) {
                this.shape = shape;
            }
            if (update) {
                this.update = update;
            }
            if (extra) {
                this.extra = extra;
            } 
        }
    }

    updateAndDab(ctx: CanvasRenderingContext2D, delta: number) {
        this.update(ctx, delta, this)
        this.dab(ctx)
    }

    private dab(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        this.shape(ctx, this)
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}