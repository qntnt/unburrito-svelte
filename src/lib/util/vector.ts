
export class Vec3 {
    readonly parts: [x: number, y: number, z: number]

    constructor([x, y, z]: [number, number, number]) {
        this.parts = [x, y, z]
    }

    get x() {
        return this.parts[0]
    }
    get y() {
        return this.parts[1]
    }
    get z() {
        return this.parts[2]
    }

    add(v: Vec3): Vec3 {
        return new Vec3([this.x + v.x, this.y + v.y, this.z + v.z])
    }
    mult(v: Vec3): Vec3 {
        return new Vec3([this.x * v.x, this.y * v.y, this.z * v.z])
    }
    scale(scalar: number): Vec3 {
        return new Vec3([this.x * scalar, this.y * scalar, this.z * scalar])
    }
}
