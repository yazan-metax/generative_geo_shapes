class shape {
  constructor(x, y) {
    this.pos_x = x;
    this.pos_y = y;
    this.components = [];

    do {
      console.log("Attempting to add components...");
      layerArray.forEach(compo => {
        let picker = random(0,1);
        if (picker > compo.weight) {
          const component = compo.init();
					console.log(component);
          if (component && typeof component.render === 'function') {
            this.components.push(component);
            console.log(`Component added: ${compo.name}`);
          } else {
            console.log(`Failed to initialize or incorrect render method for: ${compo.name}`);
          }
        }
      });
      if (this.components.length === 0) {
        console.log("No components added in this iteration, trying again...");
      }
    } while (this.components.length < 3);
  }

  render() {
    push();
    translate(this.pos_x, this.pos_y);
    this.components.forEach(compo => {
      compo.render();
    });
    pop();
  }
}

const layerArray = [
	{
		name:'center shape',
		init: () => new  centershape(),
		weight:0.8
	},
	{
		name:'multiShape',
		init: () => new  multiShape(),
		weight:0.6
	},
	{
		name:'edge Shapes',
		init: () => new  edgeShapes(),
		weight:0.3
	},
	{
		name:'Dotted Lines',
		init: () => new  DottedLines(),
		weight:0.3
	},
	{
		name:'determine lines',
		init: () => new  determine_lines(),
		weight:0.5
	},
	{
		name:'circles',
		init: () => new  circles(),
		weight:0.6
	},
	{
		name:'outLineShape',
		init: () => new  outLineShape(),
		weight:0.1
	},
	{
		name:'Leaf',
		init: () => new  leaf(),
		weight:0.5
	}
]
