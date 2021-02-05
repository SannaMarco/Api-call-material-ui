import React from 'react'
import MaterialTable from 'material-table'

function MaterialTtable() {
    return (


            <div style={{maxWidth: '100%'}}>

                    <MaterialTable
                        columns={[
                        { title: 'name', field: 'name'},
                        { title: 'surname', field: 'surname'},
                        { title: 'birth', field: 'birthYear', type: 'numeric'},
                        { title: 'city', field: 'birthCity', lookup: {34: 'instanbul', 63: 'miami'}}
                    ]} 
                    data={[{ name: 'mamhood', surname: 'barak', birthYear: 1969, birthCity: 63 }]}
                    title='Demo'



                    />

            </div>

                


        
    )
}

export default MaterialTtable
