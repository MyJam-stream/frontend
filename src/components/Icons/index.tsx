import { ComponentProps } from "react";
import cx from "clsx";

interface IconProps extends ComponentProps<"svg"> {
  iconClassName?: string;
  className?: string;
}

export const CheckedIcon: React.FC<IconProps> = ({
  className,
  iconClassName,
}) => {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 7.7065L6 10.207L10.5 5.7075L9.7925 5L6 8.793L4.2065 7L3.5 7.7065Z"
        fill="#1E8E3E"
      />
      <path
        d="M3.11101 1.67971C4.26216 0.910543 5.61553 0.5 7 0.5C8.85652 0.5 10.637 1.2375 11.9497 2.55025C13.2625 3.86301 14 5.64348 14 7.5C14 8.88447 13.5895 10.2378 12.8203 11.389C12.0511 12.5401 10.9579 13.4373 9.67879 13.9672C8.3997 14.497 6.99224 14.6356 5.63437 14.3655C4.2765 14.0954 3.02922 13.4287 2.05026 12.4497C1.07129 11.4708 0.404603 10.2235 0.134506 8.86563C-0.13559 7.50776 0.00303298 6.1003 0.532846 4.82122C1.06266 3.54213 1.95987 2.44888 3.11101 1.67971ZM3.66658 12.4888C4.65328 13.1481 5.81332 13.5 7 13.5C8.5913 13.5 10.1174 12.8679 11.2426 11.7426C12.3679 10.6174 13 9.0913 13 7.5C13 6.31331 12.6481 5.15327 11.9888 4.16658C11.3295 3.17988 10.3925 2.41085 9.2961 1.95672C8.19975 1.5026 6.99335 1.38378 5.82946 1.61529C4.66558 1.8468 3.59648 2.41824 2.75736 3.25736C1.91825 4.09647 1.3468 5.16557 1.11529 6.32946C0.88378 7.49334 1.0026 8.69974 1.45673 9.7961C1.91085 10.8925 2.67989 11.8295 3.66658 12.4888Z"
        className={cx("fill-[#1E8E3E]", iconClassName)}
      />
    </svg>
  );
};

export const FailedIcon: React.FC<IconProps> = ({
  className,
  iconClassName,
}) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 7C14 3.13401 10.866 1.18292e-06 7 0C3.13401 -2.14186e-06 1.18292e-06 3.134 0 7C-2.14186e-06 10.866 3.134 14 7 14C10.866 14 14 10.866 14 7ZM4.67091 3.94754L7.00001 6.29075L9.32912 3.94754L10.0384 4.65251L7.70499 7L10.0383 9.34749L9.32911 10.0525L7.00001 7.70925L4.67092 10.0525L3.96168 9.34749L6.29503 7L3.96167 4.65251L4.67091 3.94754Z"
        fill="#D93026"
      />
    </svg>
  );
};

export const HomeIcon: React.FC<IconProps & { curPath: boolean }> = ({
  className,
  iconClassName,
  curPath,
}) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M13.0003 3.24954L4.3335 9.74967V22.7499H9.75027V15.1664H16.2504V22.7499H21.6672V9.74967L13.0003 3.24954Z"
      className={cx(
        iconClassName,
        curPath ? "fill-[#1A202C]" : "fill-[#ffffff]"
      )}
    />
  </svg>
);

export const MicIcon: React.FC<IconProps & { curPath: boolean }> = ({
  className,
  iconClassName,
  curPath,
}) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12.9998 16.25C14.7982 16.25 16.239 14.7983 16.239 13L16.2498 6.5C16.2498 4.70167 14.7982 3.25 12.9998 3.25C11.2015 3.25 9.74984 4.70167 9.74984 6.5V13C9.74984 14.7983 11.2015 16.25 12.9998 16.25ZM18.7415 13C18.7415 16.25 15.9898 18.525 12.9998 18.525C10.0098 18.525 7.25817 16.25 7.25817 13H5.4165C5.4165 16.705 8.36317 19.7492 11.9165 20.28V23.8333H14.0832V20.28C17.6365 19.76 20.5832 16.705 20.5832 13H18.7415Z"
      className={cx(
        iconClassName,
        curPath ? "fill-[#1A202C]" : "fill-[#ffffff]"
      )}
    />
  </svg>
);

export const VoiceIcon: React.FC<IconProps & { curPath: boolean }> = ({
  className,
  iconClassName,
  curPath,
}) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 15C24.204 15 24.3997 15.079 24.5439 15.2197C24.6882 15.3603 24.7692 15.5511 24.7692 15.75V32.25C24.7692 32.4489 24.6882 32.6397 24.5439 32.7803C24.3997 32.921 24.204 33 24 33C23.796 33 23.6003 32.921 23.4561 32.7803C23.3118 32.6397 23.2308 32.4489 23.2308 32.25V15.75C23.2308 15.5511 23.3118 15.3603 23.4561 15.2197C23.6003 15.079 23.796 15 24 15ZM20.9231 18C21.1271 18 21.3227 18.079 21.467 18.2197C21.6113 18.3603 21.6923 18.5511 21.6923 18.75V29.25C21.6923 29.4489 21.6113 29.6397 21.467 29.7803C21.3227 29.921 21.1271 30 20.9231 30C20.7191 30 20.5234 29.921 20.3791 29.7803C20.2349 29.6397 20.1538 29.4489 20.1538 29.25V18.75C20.1538 18.5511 20.2349 18.3603 20.3791 18.2197C20.5234 18.079 20.7191 18 20.9231 18ZM27.0769 18C27.2809 18 27.4766 18.079 27.6209 18.2197C27.7651 18.3603 27.8462 18.5511 27.8462 18.75V29.25C27.8462 29.4489 27.7651 29.6397 27.6209 29.7803C27.4766 29.921 27.2809 30 27.0769 30C26.8729 30 26.6773 29.921 26.533 29.7803C26.3887 29.6397 26.3077 29.4489 26.3077 29.25V18.75C26.3077 18.5511 26.3887 18.3603 26.533 18.2197C26.6773 18.079 26.8729 18 27.0769 18ZM17.8462 20.25C18.0502 20.25 18.2458 20.329 18.3901 20.4697C18.5343 20.6103 18.6154 20.8011 18.6154 21V27C18.6154 27.1989 18.5343 27.3897 18.3901 27.5303C18.2458 27.671 18.0502 27.75 17.8462 27.75C17.6421 27.75 17.4465 27.671 17.3022 27.5303C17.158 27.3897 17.0769 27.1989 17.0769 27V21C17.0769 20.8011 17.158 20.6103 17.3022 20.4697C17.4465 20.329 17.6421 20.25 17.8462 20.25ZM30.1538 20.25C30.3579 20.25 30.5535 20.329 30.6978 20.4697C30.842 20.6103 30.9231 20.8011 30.9231 21V27C30.9231 27.1989 30.842 27.3897 30.6978 27.5303C30.5535 27.671 30.3579 27.75 30.1538 27.75C29.9498 27.75 29.7542 27.671 29.6099 27.5303C29.4657 27.3897 29.3846 27.1989 29.3846 27V21C29.3846 20.8011 29.4657 20.6103 29.6099 20.4697C29.7542 20.329 29.9498 20.25 30.1538 20.25ZM14.7692 21.75C14.9732 21.75 15.1689 21.829 15.3132 21.9697C15.4574 22.1103 15.5385 22.3011 15.5385 22.5V25.5C15.5385 25.6989 15.4574 25.8897 15.3132 26.0303C15.1689 26.171 14.9732 26.25 14.7692 26.25C14.5652 26.25 14.3696 26.171 14.2253 26.0303C14.081 25.8897 14 25.6989 14 25.5V22.5C14 22.3011 14.081 22.1103 14.2253 21.9697C14.3696 21.829 14.5652 21.75 14.7692 21.75ZM33.2308 21.75C33.4348 21.75 33.6304 21.829 33.7747 21.9697C33.919 22.1103 34 22.3011 34 22.5V25.5C34 25.6989 33.919 25.8897 33.7747 26.0303C33.6304 26.171 33.4348 26.25 33.2308 26.25C33.0268 26.25 32.8311 26.171 32.6868 26.0303C32.5426 25.8897 32.4615 25.6989 32.4615 25.5V22.5C32.4615 22.3011 32.5426 22.1103 32.6868 21.9697C32.8311 21.829 33.0268 21.75 33.2308 21.75Z"
      className={cx(
        iconClassName,
        curPath ? "fill-[#1A202C]" : "fill-[#ffffff]"
      )}
    />
  </svg>
);

export const SpockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M501.03 116.176c-19.39-31.508-51.244-35.728-66.31-35.018c-14.113-50.81-62.004-54.08-70.738-54.08a74.03 74.03 0 0 0-72.238 58.916l-4.647 22.66l-13.683-53.206c-9.096-35.371-46.412-64.051-89.66-53.073a73.897 73.897 0 0 0-55.121 78.948a73.683 73.683 0 0 0-64.85 94.421l24.36 82.198c-38.24-7.545-62.797 16.183-68.116 21.847a73.68 73.68 0 0 0 3.2 104.194l91.365 85.976A154.164 154.164 0 0 0 220.622 512h107.456a127.3 127.3 0 0 0 124.261-98.139L509.962 171.9a73.203 73.203 0 0 0-8.931-55.723Zm-37.76 44.605l-57.622 241.967a79.466 79.466 0 0 1-77.57 61.26H220.623a106.34 106.34 0 0 1-73.137-28.998l-91.369-85.98c-24.773-23.303 10.494-60.899 35.28-37.49l51.122 48.107c5.426 5.109 13.483.716 13.483-5.827a246.8 246.8 0 0 0-10.178-70.152L109.811 162.13c-9.733-32.883 39.699-47.271 49.386-14.625l31.344 105.78c5.594 18.904 33.781 10.712 28.965-8.008l-42.442-165.04c-8.504-33.103 41.432-45.646 49.865-12.835l47.327 184.035c4.427 17.242 29.162 16.504 32.71-.805l31.791-154.97c6.81-33.108 57.518-24.108 50.12 11.962l-28.55 139.166c-3.722 18.11 23.669 24.631 28.057 6.217l24.801-104.146c7.965-33.348 57.955-21.063 50.086 11.921Z"
    />
  </svg>
);

export const QuestionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M10.97 8.265a1.45 1.45 0 0 0-.487.57a.75.75 0 0 1-1.341-.67c.2-.402.513-.826.997-1.148C10.627 6.69 11.244 6.5 12 6.5c.658 0 1.369.195 1.934.619a2.45 2.45 0 0 1 1.004 2.006c0 1.033-.513 1.72-1.027 2.215c-.19.183-.399.358-.579.508l-.147.123a4.329 4.329 0 0 0-.435.409v1.37a.75.75 0 1 1-1.5 0v-1.473c0-.237.067-.504.247-.736c.22-.28.486-.517.718-.714l.183-.153l.001-.001c.172-.143.324-.27.47-.412c.368-.355.569-.676.569-1.136a.953.953 0 0 0-.404-.806C12.766 8.118 12.384 8 12 8c-.494 0-.814.121-1.03.265ZM13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
    />
    <path
      fill="currentColor"
      d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12Z"
    />
  </svg>
);
