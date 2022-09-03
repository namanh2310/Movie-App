import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dataAPI from "../common/apis/dataAPI";
import { APIKey } from "../common/apis/APIkey";

export const fetchMovies = createAsyncThunk(
  "netflix/fetchMovies",
  async (movieData) => {
    const res = await dataAPI.get(
      `?apiKey=${APIKey}&s=${movieData.title}&type=movie&page=${movieData.page}&y=${movieData.year}`
    );
    return res.data;
  }
);

export const fetchSeries = createAsyncThunk(
  "netflix/fetchSeries",
  async (seriesData) => {
    const res = await dataAPI.get(
      `?apiKey=${APIKey}&s=${seriesData.title}&type=series&page=${seriesData.page}&y=${seriesData.year}`
    );
    return res.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  loading: false,
  isOpening: false,
  modalData: { poster: "", title: "", id: "", type: "" },
  currentUser: [],
  auth: false,
};

export const netflixSlice = createSlice({
  name: "netflix",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpening = true;
      state.modalData.poster = action.payload.poster;
      state.modalData.title = action.payload.title;
      state.modalData.id = action.payload.id;
      state.modalData.type = action.payload.type;
    },

    closeModal: (state) => {
      state.isOpening = false;
    },

    getCurrentUser: (state, action) => {
      state.currentUser.push(action.payload);
      state.auth = true;
    },

    removeCurrentUser: (state, action) => {
      state.currentUser = [];
      state.auth = false;
    },
  },
  extraReducers: {
    //Movies
    [fetchMovies.pending]: (state) => {
      state.loading = true;
      state.movies = [];
      console.log("Pending");
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("Fetched Successfully!");
      state.movies = action.payload;
    },
    [fetchMovies.rejected]: (state) => {
      state.loading = false;
      console.log("Error");
    },

    //Series

    [fetchSeries.pending]: (state) => {
      state.loading = true;
      state.series = [];
      console.log("Pending");
    },
    [fetchSeries.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("Fetched Successfully!");
      state.series = action.payload;
    },
    [fetchSeries.rejected]: (state) => {
      state.loading = false;
      console.log("Error");
    },
  },
});

export const { openModal, closeModal, getCurrentUser, removeCurrentUser } =
  netflixSlice.actions;
