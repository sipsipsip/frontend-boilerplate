import React, {Component } from 'react'
import { Route, IndexRoute } from 'react-router'

import BaseLayout from '../layouts/Base'
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import AdminView from '../views/admin/AdminView'
import ManagePegawaiAtasan from '../views/admin/ManagePegawaiAtasan'



export default (
    <Route path="/" component={BaseLayout}>
        <IndexRoute component={HomeView} />
        <Route path="/about" component={AboutView} />
        <Route path="/admin" component={AdminView}>
            <Route path="/admin/manage-pegawai-atasan" component={ManagePegawaiAtasan} />
        </Route>
    </Route>
)