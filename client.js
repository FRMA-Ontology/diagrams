
window.app = {}

// SVG-Viewer Component
Vue.component('svg-viewer', {
  props: ['svgUrl'],
  template: `
    <object
      id="demo-tiger"
      type="image/svg+xml"
      :data="svgUrl"
      style="width: 100%; height: 400px; border:1px solid #f3f3f3; border-top:none;"
    >
      Your browser does not support SVG
    </object>
  `,
  mounted () {
    setTimeout(() => {
      svgPanZoom('#demo-tiger', {
        zoomEnabled: true,
        controlIconsEnabled: true
      })
    }, 1000)
  }
})

// Layout Component definition
window.app.layout = {
  template: `
    <div class='row mt-4 pt-4'>

      <div class='col-sm-12'>
        <h4>Conceptual Diagrams</h4>
        <p class="lead mb-0">The diagrams describe the five sub-ontologies that complete the FRMA Ontology</p>
        <small>You may zoom and pan each diagram.</small>
      </div>

      <div class='col-sm-12 mt-3'>
        <b-tabs lazy>
          <b-tab class='text-light' :title="ont.label" v-for="ont in ontologies" :key="ont.label">
            <svg-viewer :svgUrl="ont.map" />
          </b-tab>
        </b-tabs>
      </div>

    </div>
  `,
  data () {
    return {
      ontologies: [
        { label: 'Hair', map: 'concept-maps/oe_10/OE_X_HairOntology.svg' },
        { label: 'Image', map: 'concept-maps/oe_10/OE_X_ImageOntology.svg' },
        { label: 'Machine Learning Model', map: 'concept-maps/oe_10/OE_X_MachineLearningModelOntology.svg' },
        { label: 'Person, Face, and Demographic', map: 'concept-maps/oe_10/OE_X_PersonFaceAndDemographicOntology.svg' },
        { label: 'Wearable Things', map: 'concept-maps/oe_10/OE_X_WearableThingsOntology.svg' }
        // { label: 'FRMA', map: 'concept-maps/oe_10/OE_X_FRMA.svg' }
      ]
    }
  }
};

window.app.splash = {
  template: `
    <div class='row h-100 mt-4 pt-4 align-items-center justify-content-center'>
      <div class='col-lg-12 text-center'>
        <h1 class='my-3'>
          <strong>FRMA Ontology</strong>
        </h1>
        <p class='lead my-3 text-muted'>
          Conceptual Diagrams
        </p>

        <a href='#/map' class='btn btn-lg btn-outline-primary my-3'>
          <i class='fa fa-map mr-2'></i>
          Let's get started
        </a>
      </div>
    </div>
  `
}