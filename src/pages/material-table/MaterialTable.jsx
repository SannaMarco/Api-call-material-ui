import React from 'react'
import { default as MatTable } from 'material-table'
import Layout from "../../layout/Layout";

export default function MaterialTable() {
    return (
        <Layout>
            <div style={{maxWidth: '100%'}}>
                <MatTable
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
        </Layout>
    )
}

export function getData(){
    return true;
}
