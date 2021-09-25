/*jshint esversion:6*/
import {
    CREATE_VEHICLE,
    RETRIEVE_VEHICLES,
    UPDATE_VEHICLE,
    DELETE_VEHICLE
} from './types';

import vehicleService from '../services/vehicleService';

export const createVehicle = (
    vehicle_Name,
    vehicle_Model,
    vehicle_Year,
    chassis_Number,
    registration_Number,
    fuel_Type
) => async(dispatch) => {
    try {
        const res = await vehicleService.create({
            vehicle_Name,
            vehicle_Model,
            vehicle_Year,
            chassis_Number,
            registration_Number,
            fuel_Type
        });

        dispatch({
            type: CREATE_VEHICLE,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveVehicles = () => async(dispatch) => {
    try {
        const res = await vehicleService.getAll();

        dispatch({
            type: RETRIEVE_VEHICLES,
            payload: res.data
        });

    } catch (err) {
        return Promise.reject(err);
    }
};

export const updateVehicle = (id, data) => async(dispatch) => {
    try {
        const res = await vehicleService.update(id, data);

        dispatch({
            type: UPDATE_VEHICLE,
            payload: data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteVehicle = (id) => async(dispatch) => {
    try {
        await vehicleService.delete(id);

        dispatch({
            type: DELETE_VEHICLE,
            payload: { id }
        });

    } catch (err) {
        console.log(err);
    }
};