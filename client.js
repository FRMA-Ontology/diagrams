
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

      <div class='col-sm-12 mt-3'>

        <b-tabs lazy>
          <b-tab class='text-light' title="HO Ontology">
            <svg-viewer svgUrl="concept-maps/PFD.rdf.svg" />
          </b-tab>
          <b-tab class='text-light' title="IMG Ontology">
            <svg-viewer svgUrl="concept-maps/IMG.rdf.svg" />
          </b-tab>
          <b-tab class='text-light' title="MLMO Ontology">
            <svg-viewer svgUrl="concept-maps/MLMO.rdf.svg" />
          </b-tab>
          <b-tab class='text-light' title="PDF Ontology">
            <svg-viewer svgUrl="concept-maps/PFD.rdf.svg" />
          </b-tab>
          <b-tab class='text-light' title="WT Ontology">
            <svg-viewer svgUrl="concept-maps/WT.rdf.svg" />
          </b-tab>
        </b-tabs>

      </div>

    </div>
  `
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