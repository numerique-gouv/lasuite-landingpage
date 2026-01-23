import React, { useRef, useState, useEffect } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

type AdvantageItem = {
  icone?: string
  title: string
  description: string
}

type AdvantagesData = {
  title?: string
  content?: string
  items?: AdvantageItem[]
}

const UploadFileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M11 19H13V14.825L14.6 16.425L16 15L12 11L8 15L9.425 16.4L11 14.825V19ZM6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H14L20 8V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM13 9V4H6V20H18V9H13Z"
      fill="#304DDF"
    />
  </svg>
)

const PublicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM11 19.95V18C10.45 18 9.97917 17.8042 9.5875 17.4125C9.19583 17.0208 9 16.55 9 16V15L4.2 10.2C4.15 10.5 4.10417 10.8 4.0625 11.1C4.02083 11.4 4 11.7 4 12C4 14.0167 4.6625 15.7833 5.9875 17.3C7.3125 18.8167 8.98333 19.7 11 19.95ZM17.9 17.4C18.2333 17.0333 18.5333 16.6375 18.8 16.2125C19.0667 15.7875 19.2875 15.3458 19.4625 14.8875C19.6375 14.4292 19.7708 13.9583 19.8625 13.475C19.9542 12.9917 20 12.5 20 12C20 10.3667 19.5458 8.875 18.6375 7.525C17.7292 6.175 16.5167 5.2 15 4.6V5C15 5.55 14.8042 6.02083 14.4125 6.4125C14.0208 6.80417 13.55 7 13 7H11V9C11 9.28333 10.9042 9.52083 10.7125 9.7125C10.5208 9.90417 10.2833 10 10 10H8V12H14C14.2833 12 14.5208 12.0958 14.7125 12.2875C14.9042 12.4792 15 12.7167 15 13V16H16C16.4333 16 16.825 16.1292 17.175 16.3875C17.525 16.6458 17.7667 16.9833 17.9 17.4Z"
      fill="#304DDF"
    />
  </svg>
)

const WorkspaceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6 21C4.9 21 3.95833 20.6083 3.175 19.825C2.39167 19.0417 2 18.1 2 17C2 15.9 2.39167 14.9583 3.175 14.175C3.95833 13.3917 4.9 13 6 13C7.1 13 8.04167 13.3917 8.825 14.175C9.60833 14.9583 10 15.9 10 17C10 18.1 9.60833 19.0417 8.825 19.825C8.04167 20.6083 7.1 21 6 21ZM18 21C16.9 21 15.9583 20.6083 15.175 19.825C14.3917 19.0417 14 18.1 14 17C14 15.9 14.3917 14.9583 15.175 14.175C15.9583 13.3917 16.9 13 18 13C19.1 13 20.0417 13.3917 20.825 14.175C21.6083 14.9583 22 15.9 22 17C22 18.1 21.6083 19.0417 20.825 19.825C20.0417 20.6083 19.1 21 18 21ZM6 19C6.55 19 7.02083 18.8042 7.4125 18.4125C7.80417 18.0208 8 17.55 8 17C8 16.45 7.80417 15.9792 7.4125 15.5875C7.02083 15.1958 6.55 15 6 15C5.45 15 4.97917 15.1958 4.5875 15.5875C4.19583 15.9792 4 16.45 4 17C4 17.55 4.19583 18.0208 4.5875 18.4125C4.97917 18.8042 5.45 19 6 19ZM18 19C18.55 19 19.0208 18.8042 19.4125 18.4125C19.8042 18.0208 20 17.55 20 17C20 16.45 19.8042 15.9792 19.4125 15.5875C19.0208 15.1958 18.55 15 18 15C17.45 15 16.9792 15.1958 16.5875 15.5875C16.1958 15.9792 16 16.45 16 17C16 17.55 16.1958 18.0208 16.5875 18.4125C16.9792 18.8042 17.45 19 18 19ZM12 11C10.9 11 9.95833 10.6083 9.175 9.825C8.39167 9.04167 8 8.1 8 7C8 5.9 8.39167 4.95833 9.175 4.175C9.95833 3.39167 10.9 3 12 3C13.1 3 14.0417 3.39167 14.825 4.175C15.6083 4.95833 16 5.9 16 7C16 8.1 15.6083 9.04167 14.825 9.825C14.0417 10.6083 13.1 11 12 11ZM12 9C12.55 9 13.0208 8.80417 13.4125 8.4125C13.8042 8.02083 14 7.55 14 7C14 6.45 13.8042 5.97917 13.4125 5.5875C13.0208 5.19583 12.55 5 12 5C11.45 5 10.9792 5.19583 10.5875 5.5875C10.1958 5.97917 10 6.45 10 7C10 7.55 10.1958 8.02083 10.5875 8.4125C10.9792 8.80417 11.45 9 12 9Z"
      fill="#304DDF"
    />
  </svg>
)

const EspaceLockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.31467 16.9584C8.50768 17.1528 8.74077 17.25 9.01393 17.25H14.9731C15.2463 17.25 15.4801 17.1528 15.6746 16.9584C15.8691 16.764 15.9663 16.5303 15.9663 16.2574V10.9632C15.9663 10.6903 15.8691 10.4566 15.6747 10.2622C15.4803 10.0678 15.2467 9.97059 14.9737 9.97059H14.6428V8.64706C14.6428 7.91471 14.3854 7.29044 13.8707 6.77426C13.356 6.25809 12.7321 6 11.9989 6C11.2656 6 10.6406 6.25809 10.1239 6.77426C9.60709 7.29044 9.34868 7.91471 9.34868 8.64706V9.97059H9.01779C8.74482 9.97059 8.51113 10.0678 8.31674 10.2622C8.12234 10.4566 8.02515 10.6903 8.02515 10.9632V16.2574C8.02515 16.5303 8.12165 16.764 8.31467 16.9584ZM13.6501 9.97059H10.3413V8.64706C10.3413 8.1875 10.5022 7.79688 10.8239 7.47518C11.1456 7.15349 11.5362 6.99265 11.9957 6.99265C12.4553 6.99265 12.8459 7.15349 13.1676 7.47518C13.4893 7.79688 13.6501 8.1875 13.6501 8.64706V9.97059Z"
      fill="#304DDF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.58868 0.958613C10.4998 0.43351 10.9554 0.170959 11.4398 0.0681946C11.8683 -0.0227315 12.3112 -0.0227315 12.7398 0.0681946C13.2241 0.170959 13.6797 0.43351 14.5908 0.958613L20.4187 4.31723C21.3298 4.84233 21.7854 5.10488 22.1167 5.4722C22.4099 5.7972 22.6314 6.18007 22.7668 6.596C22.9198 7.06608 22.9198 7.59118 22.9198 8.64139V15.3586C22.9198 16.4088 22.9198 16.9339 22.7668 17.404C22.6314 17.8199 22.4099 18.2028 22.1167 18.5278C21.7854 18.8951 21.3298 19.1577 20.4187 19.6828L14.5908 23.0414C13.6797 23.5665 13.2241 23.829 12.7398 23.9318C12.3112 24.0227 11.8683 24.0227 11.4398 23.9318C10.9554 23.829 10.4998 23.5665 9.58868 23.0414L3.76085 19.6828C2.84969 19.1577 2.39412 18.8951 2.06279 18.5278C1.76962 18.2028 1.54817 17.8199 1.41278 17.404C1.25977 16.9339 1.25977 16.4088 1.25977 15.3586V8.64139C1.25977 7.59118 1.25977 7.06608 1.41278 6.596C1.54817 6.18007 1.76962 5.7972 2.06279 5.4722C2.39411 5.10488 2.84969 4.84233 3.76084 4.31723L9.58868 0.958613ZM13.382 3.05612L19.2099 6.41474C19.6895 6.69116 19.9587 6.84743 20.1542 6.97606C20.2636 7.04808 20.3093 7.08575 20.3225 7.09752C20.3855 7.16836 20.4332 7.25096 20.463 7.34021C20.4666 7.35766 20.4763 7.41573 20.484 7.545C20.4979 7.77792 20.4989 8.08842 20.4989 8.64139V15.3586C20.4989 15.9116 20.4979 16.2221 20.484 16.455C20.4763 16.5843 20.4666 16.6424 20.463 16.6598C20.4332 16.7491 20.3855 16.8316 20.3225 16.9025C20.3093 16.9143 20.2636 16.9519 20.1542 17.0239C19.9587 17.1526 19.6895 17.3088 19.2099 17.5853L13.382 20.9439C12.9024 21.2203 12.6322 21.3749 12.4229 21.4795C12.305 21.5384 12.2494 21.5591 12.2326 21.5646C12.1384 21.5839 12.0412 21.5839 11.9469 21.5646C11.9302 21.5591 11.8745 21.5384 11.7567 21.4795C11.5473 21.3749 11.2771 21.2203 10.7975 20.9439L4.96965 17.5853C4.49 17.3088 4.22081 17.1526 4.02538 17.0239C3.91595 16.9519 3.87024 16.9142 3.857 16.9025C3.79402 16.8316 3.7463 16.749 3.71648 16.6598C3.71291 16.6423 3.70321 16.5843 3.69552 16.455C3.68165 16.2221 3.68067 15.9116 3.68067 15.3586V8.64139C3.68067 8.08843 3.68165 7.77792 3.69552 7.545C3.70321 7.41573 3.71291 7.35765 3.71648 7.34021C3.7463 7.25095 3.79402 7.16836 3.857 7.09752C3.87025 7.08575 3.91596 7.04808 4.02538 6.97606C4.22081 6.84743 4.49 6.69116 4.96965 6.41474L10.7975 3.05612C11.2771 2.7797 11.5473 2.62512 11.7567 2.52048C11.8746 2.46155 11.9302 2.44091 11.9469 2.4354C12.0412 2.41607 12.1384 2.41607 12.2326 2.4354C12.2493 2.44091 12.305 2.46155 12.4229 2.52048C12.6322 2.62512 12.9024 2.7797 13.382 3.05612ZM20.3269 7.10163L20.3225 7.09752C20.325 7.09971 20.327 7.10163 20.3269 7.10163ZM20.4616 7.33425C20.4617 7.33414 20.4624 7.33695 20.463 7.34021L20.4616 7.33425ZM20.4616 16.6657L20.463 16.6598C20.4623 16.6631 20.4616 16.6659 20.4616 16.6657ZM20.3269 16.8984C20.327 16.8983 20.3274 16.8979 20.3269 16.8984L20.3225 16.9025C20.3238 16.9013 20.3263 16.8989 20.3269 16.8984ZM12.2269 21.5663L12.2326 21.5646C12.2294 21.5656 12.2269 21.5664 12.2269 21.5663ZM11.9526 21.5663C11.9527 21.5664 11.9501 21.5656 11.9469 21.5646L11.9526 21.5663ZM3.857 16.9025L3.85263 16.8984C3.85204 16.8978 3.85258 16.8984 3.85263 16.8984C3.85319 16.8989 3.8558 16.9014 3.857 16.9025ZM3.71648 16.6598L3.71789 16.6658C3.71786 16.6659 3.71717 16.663 3.71648 16.6598ZM3.71648 7.34021C3.71718 7.33695 3.71786 7.33415 3.71789 7.33425L3.71648 7.34021ZM3.85263 7.10163C3.85253 7.10166 3.85453 7.09974 3.857 7.09752L3.85263 7.10163ZM11.95 2.43442C11.9494 2.43459 11.9477 2.43515 11.9469 2.4354L11.9526 2.43372C11.9526 2.43366 11.9518 2.43386 11.95 2.43442ZM12.2326 2.4354L12.2269 2.43372C12.2269 2.43364 12.2294 2.43437 12.2326 2.4354Z"
      fill="#304DDF"
    />
  </svg>
)

const ShieldPersonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 11C12.4333 11 12.7917 10.8583 13.075 10.575C13.3583 10.2917 13.5 9.93333 13.5 9.5C13.5 9.06667 13.3583 8.70833 13.075 8.425C12.7917 8.14167 12.4333 8 12 8C11.5667 8 11.2083 8.14167 10.925 8.425C10.6417 8.70833 10.5 9.06667 10.5 9.5C10.5 9.93333 10.6417 10.2917 10.925 10.575C11.2083 10.8583 11.5667 11 12 11ZM12 22C9.68333 21.4167 7.77083 20.0875 6.2625 18.0125C4.75417 15.9375 4 13.6333 4 11.1V5L12 2L20 5V11.1C20 13.6333 19.2458 15.9375 17.7375 18.0125C16.2292 20.0875 14.3167 21.4167 12 22ZM12 4.125L6 6.375V11.1C6 12 6.125 12.875 6.375 13.725C6.625 14.575 6.96667 15.375 7.4 16.125C8.1 15.775 8.83333 15.5 9.6 15.3C10.3667 15.1 11.1667 15 12 15C12.8333 15 13.6333 15.1 14.4 15.3C15.1667 15.5 15.9 15.775 16.6 16.125C17.0333 15.375 17.375 14.575 17.625 13.725C17.875 12.875 18 12 18 11.1V6.375L12 4.125ZM12 17C11.4 17 10.8167 17.0667 10.25 17.2C9.68333 17.3333 9.14167 17.5167 8.625 17.75C9.10833 18.25 9.63333 18.6833 10.2 19.05C10.7667 19.4167 11.3667 19.7 12 19.9C12.6333 19.7 13.2333 19.4167 13.8 19.05C14.3667 18.6833 14.8917 18.25 15.375 17.75C14.8583 17.5167 14.3167 17.3333 13.75 17.2C13.1833 17.0667 12.6 17 12 17Z"
      fill="#304DDF"
    />
  </svg>
)

const PublishedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M11 21.9498C9.73333 21.8165 8.55417 21.4706 7.4625 20.9123C6.37083 20.354 5.42083 19.629 4.6125 18.7373C3.80417 17.8456 3.16667 16.8248 2.7 15.6748C2.23333 14.5248 2 13.2998 2 11.9998C2 10.4831 2.30417 9.08314 2.9125 7.7998C3.52083 6.51647 4.35 5.41647 5.4 4.4998H3V2.4998H9V8.4998H7V5.7748C6.08333 6.50814 5.35417 7.4123 4.8125 8.4873C4.27083 9.5623 4 10.7331 4 11.9998C4 14.0498 4.67083 15.8206 6.0125 17.3123C7.35417 18.804 9.01667 19.6748 11 19.9248V21.9498ZM10.575 16.5998L6.35 12.3498L7.75 10.9498L10.575 13.7748L16.25 8.0998L17.65 9.5248L10.575 16.5998ZM15 21.4998V15.4998H17V18.2248C17.9167 17.4748 18.6458 16.5665 19.1875 15.4998C19.7292 14.4331 20 13.2665 20 11.9998C20 9.9498 19.3292 8.17897 17.9875 6.6873C16.6458 5.19564 14.9833 4.3248 13 4.0748V2.0498C15.5333 2.2998 17.6667 3.36647 19.4 5.2498C21.1333 7.13314 22 9.38314 22 11.9998C22 13.5165 21.6958 14.9165 21.0875 16.1998C20.4792 17.4831 19.65 18.5831 18.6 19.4998H21V21.4998H15Z"
      fill="#304DDF"
    />
  </svg>
)

const PersonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V20H4ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z"
      fill="#304DDF"
    />
  </svg>
)

const CheckIcon = () => (
  <svg
    className="mt-1.5"
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="13"
    viewBox="0 0 17 13"
    fill="none"
  >
    <path
      d="M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z"
      fill="#304DDF"
    />
  </svg>
)

const iconMap: Record<string, React.ReactNode> = {
  public: <PublicIcon />,
  workspace: <WorkspaceIcon />,
  espace_lock: <EspaceLockIcon />,
  shield_person: <ShieldPersonIcon />,
  published: <PublishedIcon />,
  person: <PersonIcon />,
  check: <CheckIcon />,
  upload_file: <UploadFileIcon />,
}

export const Advantages: React.FC<AdvantagesData> = ({
  title,
  content,
  items,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [announcement, setAnnouncement] = useState('')

  const getVisibleItemIndex = (): number => {
    if (!scrollContainerRef.current) return 0
    const container = scrollContainerRef.current
    const containerRect = container.getBoundingClientRect()
    const containerCenter = containerRect.left + containerRect.width / 2

    let closestIndex = 0
    let closestDistance = Infinity

    for (let i = 0; i < itemRefs.current.length; i++) {
      const item = itemRefs.current[i]
      if (item) {
        const itemRect = item.getBoundingClientRect()
        const itemCenter = itemRect.left + itemRect.width / 2
        const distance = Math.abs(itemCenter - containerCenter)

        // Trouver l'élément le plus proche du centre
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = i
        }
      }
    }
    return closestIndex
  }

  const scrollToItem = (index: number) => {
    if (!scrollContainerRef.current) return

    const item = itemRefs.current[index]
    if (!item) return

    const container = scrollContainerRef.current

    // Pour le premier élément, on peut simplement scroller au début
    if (index === 0) {
      container.scrollTo({
        left: 0,
        behavior: 'smooth',
      })
    } else {
      // Utiliser offsetLeft pour avoir la position relative au parent
      const itemOffsetLeft = item.offsetLeft
      const itemWidth = item.offsetWidth
      const containerWidth = container.clientWidth

      // Calculer le scroll pour centrer l'élément
      const targetScroll = itemOffsetLeft - containerWidth / 2 + itemWidth / 2

      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth',
      })
    }

    setCurrentIndex(index)
    if (items) {
      setAnnouncement(`${index + 1} sur ${items.length}: ${items[index].title}`)
    }

    // Attendre que le scroll soit terminé avant de focus
    setTimeout(() => {
      item.focus()
    }, 300)
  }

  const checkScrollButtons = () => {
    if (!scrollContainerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)

    const newIndex = getVisibleItemIndex()
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollButtons)
      window.addEventListener('resize', checkScrollButtons)
      return () => {
        container.removeEventListener('scroll', checkScrollButtons)
        window.removeEventListener('resize', checkScrollButtons)
      }
    }
  }, [items])

  useEffect(() => {
    // Initialiser les refs
    itemRefs.current = itemRefs.current.slice(0, items?.length || 0)
  }, [items])

  if (!items || items.length === 0) return null

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current || !items) return

    const newIndex =
      direction === 'left'
        ? Math.max(0, currentIndex - 1)
        : Math.min(items.length - 1, currentIndex + 1)

    scrollToItem(newIndex)
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (!items) return

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        scroll('left')
        break
      case 'ArrowRight':
        e.preventDefault()
        scroll('right')
        break
      case 'Home':
        e.preventDefault()
        scrollToItem(0)
        break
      case 'End':
        e.preventDefault()
        scrollToItem(items.length - 1)
        break
    }
  }

  return (
    <div className="bg-gray-025 py-12 md:py-[120px] mt-12 md:mt-[120px]">
      <div className="max-w-container mx-auto w-[100%]">
        <div className="px-6 md:px-3 xl:px-0">
          {title && (
            <h3 className="text-gray-850 md:text-[2.75rem] text-3xl sm:leading-[42px] md:leading-[48px] font-bold pb-6">
              {title}
            </h3>
          )}
          {content && (
            <p className="text-gray-550 text-sm md:text-lg mb-12">{content}</p>
          )}
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          id="advantages-carousel"
          role="region"
          aria-label={title || 'Avantages'}
          aria-live="polite"
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 focus-within:outline-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingLeft: 'max(24px, calc(50vw - 600px))',
            paddingRight: 'max(24px, calc(50vw - 600px))',
          }}
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e, currentIndex)}
        >
          {items.map((item, idx) => {
            const icon = item.icone ? iconMap[item.icone] : null
            const isCurrent = idx === currentIndex
            return (
              <div
                key={`advantage-${idx}`}
                ref={(el) => (itemRefs.current[idx] = el)}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} sur ${items.length}`}
                tabIndex={isCurrent ? 0 : -1}
                className={`flex flex-row items-start gap-3 bg-white border border-gray-100 shadow-[0_4px_10px_rgba(0,0,0,0.05)] rounded-lg py-4 pr-7 px-4 pb-6 max-w-[80%] md:min-w-[320px] md:max-w-[380px] snap-center shrink-0 ${
                  isCurrent ? '' : ''
                }`}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              >
                <div className="mt-1 flex items-center justify-start">
                  {icon && (
                    <div
                      className="flex items-center justify-start"
                      aria-hidden="true"
                    >
                      {icon}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-brand-600 leading-[26px]">
                    {item.title}
                  </h4>
                  <p className="text-gray-550 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {announcement}
        </div>
      </div>

      <div className="max-w-container mx-auto w-[100%]">
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="flex items-center justify-center gap-2 w-[68px] h-10 rounded-lg border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label={`Précédent${canScrollLeft ? `, ${currentIndex} sur ${items.length}` : ''}`}
              aria-controls="advantages-carousel"
              className={`transition-colors -mt-1 focus:outline-2 focus:outline-offset-2 focus:outline-brand-550 rounded ${
                canScrollLeft
                  ? 'text-brand-550 cursor-pointer hover:bg-gray-50'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <ArrowBackIcon fontSize="small" aria-hidden="true" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label={`Suivant${canScrollRight ? `, ${currentIndex + 2} sur ${items.length}` : ''}`}
              aria-controls="advantages-carousel"
              className={`transition-colors -mt-1 focus:outline-2 focus:outline-offset-2 focus:outline-brand-550 rounded ${
                canScrollRight
                  ? 'text-brand-550 cursor-pointer hover:bg-gray-50'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <ArrowForwardIcon fontSize="small" aria-hidden="true" />
            </button>
          </div>
          <span className="sr-only" aria-live="polite" aria-atomic="true">
            {announcement || `${currentIndex + 1} sur ${items.length}`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Advantages
