class FooBase {
  public x: number
  private y: number
  protected z: number
}

// EFFECT ON INSTANCES
const foo = new FooBase();
foo.x
foo.y // ERROR : private
foo.z // ERROR : protected

// EFFECT ON CHILD CLASSES
class FooChild extends FooBase {
  constructor(){
    super()
    this.x // okay
    this.y // ERROR: private
    this.z // okay
  }
}