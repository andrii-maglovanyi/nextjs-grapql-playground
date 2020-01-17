import styled from "styled-components";

const ErrorComponent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 400px;
  min-width: 200px;

  .message {
    color: var(--secondary-black-color);
  }

  .svg {
    max-width: 80%;
    opacity: 0.8;
  }

  .title {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 2rem 0 1rem;
  }
`;

type Props = {
  children: React.ReactNode;
};

const Error: React.FC<Props> = ({ children }) => (
  <ErrorComponent>
    <svg
      className="svg"
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 6120 3700"
    >
      <g fill="#222021">
        <path d="M2393 3689c-94-12-178-68-189-124-5-27 2-45 36-101l62-102c11-17 31-35 44-38 19-5 149 19 226 42 18 5 35 44 68 161 22 77 22 83 7 107-10 14-30 32-45 39-33 18-139 26-209 16zm72-79c-11-4-47-17-80-27-33-11-69-23-80-28-19-7-19-7-3 10 20 22 113 54 153 54 25 0 27-2 10-9zm83-49c11-7 10-18-3-64-18-61-25-66-131-83-38-6-41-4-67 35-15 22-27 45-27 51 0 13 33 26 125 50 82 22 86 22 103 11zM3188 3635c-71-24-140-50-155-57l-28-13 3-120c3-134 13-155 76-155 97-1 365-109 456-185 66-55 62-57 234 73l145 109c12 8 28 149 19 168a691 691 0 01-160 137c-89 48-287 89-420 88-24-1-100-21-170-45zm463-82c126-43 236-133 204-165-3-3-35 14-70 37a948 948 0 01-385 131c-44 5-60 11-60 22 0 13 17 14 113 10 89-4 129-11 198-35zm-363 11c-2-9-47-45-100-80l-98-63v95l93 31c110 37 109 37 105 17zm162-66c146-26 299-90 353-146l26-27-47-36-109-83-61-48-45 30c-100 69-238 129-402 175l-50 13 109 72c91 59 115 70 140 66l86-16zM1512 3582c-19-13-32-69-32-137 0-33-9-125-19-205-31-232-46-465-33-495 17-37 58-33 124 13 80 53 234 181 297 245l54 55 8 93c5 50 18 125 29 166 23 84 25 126 8 141-7 5-40 18-73 27-33 10-105 35-159 57-102 40-181 56-204 40zm173-117c48-19 105-40 127-46 27-7 37-14 30-21-6-6-52 7-141 42-72 29-131 54-131 56 0 11 37 1 115-31zm2-71l103-39v-35c0-81-33-286-49-304-25-29-222-186-233-186-5 0-7 8-4 18 3 9 10 83 16 164 5 81 17 193 25 248s15 118 15 141c0 29 4 40 13 36l114-43zm164-85l-9-34-1 31c-1 17 2 34 6 37 12 13 14-1 4-34zM5120 3538c-51-28-90-78-90-117 0-28 78-168 105-191 12-10 55-15 139-18 171-6 173-4 136 188l-20 107c0 2-17 11-39 22-21 11-70 23-112 26-66 6-79 4-119-17zm125-80c-33-5-71-7-85-5-53 7 16 22 82 18l63-4-60-9zm79-56c3-5 8-32 12-60l7-52h-59c-85 0-100 7-129 55-14 24-25 46-25 49 0 12 187 20 194 8zM737 3385c-32-32-17-62 94-190 98-113 119-130 153-121 28 7 38 28 65 139 41 161 24 179-167 185-110 4-131 2-145-13zm236-138l-17-65c-4-4-106 116-106 125 0 4 31 7 68 5l69-4-14-61zM2840 3354c-11-13-9-19 13-42 25-25 28-25 44-9s15 18-7 42c-27 29-33 30-50 9zM2730 3292c0-10 16-33 35-52 31-30 37-32 50-19 14 14 12 19-16 52-34 40-69 49-69 19zM5815 3145l-95-25c-55-13-86-33-95-59-8-27 71-265 96-287 33-30 65-8 140 95 61 87 119 203 119 242 0 47-69 61-165 34zm63-87c-5-15-146-61-159-52-21 13 0 28 62 44 79 22 102 24 97 8zm-75-128c-39-53-49-53-59-4-5 28-3 31 33 41 63 17 65 15 26-37zM4860 3130c-80-22-140-56-165-94-15-23-15-27 6-68 74-147 172-317 187-323 9-3 65-10 124-15 82-7 134-18 226-49 66-23 129-41 140-41 20 0 109 69 126 97 13 23-49 226-97 317-38 73-47 83-102 113a622 622 0 01-445 63zm275-81c58-16 135-50 135-60 0-5-15-2-32 8-27 15-61 18-193 20-88 1-182-2-210-7-61-10-66-6-26 14 83 43 218 53 326 25zm69-93c26-11 37-24 51-62l58-152c22-56 38-104 36-106s-50 11-105 30c-67 22-137 38-205 45-57 5-109 15-115 22-7 7-37 60-68 119l-57 107 33 4c18 2 102 5 186 5 111 2 162-2 186-12zm146-71c40-87 73-206 60-219-6-6-17 9-31 40-37 87-87 232-81 238 13 14 24 2 52-59z" />
        <path d="M5066 2902c-14-28-6-62 14-62 14 0 42 60 36 76-9 23-34 16-50-14zM5134 2895c-17-41-13-65 11-65 18 0 37 44 33 74-5 34-28 30-44-9zM693 3123c-4-11 3-24 23-40 34-27 50-29 58-7s10 20-28 43c-40 25-45 26-53 4zM2640 3106c-132-25-161-44-145-96 12-37 380-388 474-453 33-22 55-9 87 54 14 28 40 71 58 97 67 94 75 119 67 209-7 92-19 110-85 142-99 48-323 71-456 47zm320-91c72-15 123-36 135-56 12-18 1-18-70 2-118 33-261 51-350 43-55-4-77-3-70 4 15 15 48 19 172 21 66 0 141-5 183-14zm-35-80c38-8 93-22 122-30 59-17 65-32 37-88-23-46-98-156-106-157-4 0-56 42-116 94-100 86-192 183-192 201 0 11 173-2 255-20zM647 3063c-15-15-5-34 30-58 21-14 46-25 55-25 32 0 20 36-22 64-41 27-52 30-63 19zM3286 3044c-21-20-20-62 2-105 17-34 185-247 206-261 38-26 80 10 150 130 36 62 46 88 46 124 0 64-26 85-121 98l-139 20c-92 14-126 12-144-6zm142-81c-10-2-28-2-40 0-13 2-5 4 17 4 22 1 32-1 23-4zm59-10c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm100-10c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm-24-49c15-3 27-9 25-13l-32-59c-33-59-31-60-101 29l-48 61 64-6c35-4 77-9 92-12zM3815 3026c-24-17-29-87-16-201 14-119 22-135 64-135 47 1 247 151 247 185 0 28-58 72-148 112-105 46-128 53-147 39zm75-163c0-36-2-64-4-62-9 11-15 129-6 129 6 0 10-30 10-67zm89 23l24-13-24-17c-33-23-39-20-39 14 0 33 4 35 39 16zM2035 3016l-180-116a3271 3271 0 01-698-588 1067 1067 0 01-189-267c-46-92-62-144-93-300-14-71-30-148-36-170-19-74-79-225-106-268-38-60-122-145-228-232l-92-75-59 21C163 1088 10 942 8 690c-1-86 2-104 33-186 45-117 112-234 170-298 47-51 162-127 254-166 69-29 183-42 263-30a256 256 0 01219 289c-5 37-3 38 69 92 112 82 227 145 298 163 125 31 324 41 547 26 269-17 288-14 562 102 154 65 259 129 427 263 63 50 177 138 252 194 141 105 164 128 192 194 19 47 31 195 22 270-11 86-26 99-129 107-48 4-90 10-94 14-8 8 9 81 43 189 15 47 23 89 19 105-8 39-174 212-203 212-12 0-41-17-65-38-23-21-59-51-79-66l-38-28v499l-28 39a624 624 0 01-201 154c-61 30-82 33-123 15-16-6-18-1-18 38 0 56-27 91-99 130-98 54-220 73-266 43zm161-86c62-22 102-46 91-56-3-3-19 3-35 15-42 29-121 29-148 0-16-18-19-36-18-103 1-75 13-155 29-199 5-11 2-17-8-17-22 0-38 54-44 152-6 99 8 171 39 206 26 27 21 27 94 2zm-214-152c-2-75 2-131 11-165l14-52-50-38c-27-21-59-55-71-75-20-36-20-37-1-58 17-19 26-21 76-15 57 7 57 7 61-22 7-65 0-76-85-123-90-50-224-154-250-194-20-30-22-66-4-87 16-20 83-70 129-96 76-44 258-95 356-101l93-5-2-176c0-97 2-184 6-193 13-31 42-29 199 11l155 41 68-33c37-18 104-41 148-51l92-22c9-2 9-12-2-38-28-67-10-102 55-108l35-3-55-40c-30-21-100-76-155-120-55-45-141-109-190-142-106-71-342-173-470-204-80-18-98-19-237-10-362 26-606 1-746-76-102-56-219-140-336-240-60-51-116-93-125-93-26 0-122 30-161 51a717 717 0 00-242 272c-24 49-30 72-30 128 0 37 4 74 9 83 4 8 35 32 68 54 33 21 87 63 120 93s96 85 140 121a732 732 0 01264 354c44 115 43 110 86 320 18 89 44 188 58 222 40 99 113 206 222 325 201 220 359 355 604 519l146 97-3-111zm251 64c9-8 17-22 17-31s10-49 22-90c27-93 41-100 134-77l66 17 52-40c116-91 104-66 120-246l27-307c7-82 16-153 20-159 11-19 49-3 151 64l96 65 20-28c20-26 20-30 6-76-17-54-31-247-20-287 5-20 18-29 68-46 35-11 82-23 106-27l42-7v-56c0-69-16-132-38-148-9-7-30-13-46-13-31 0-31 1-27 46 2 25-1 50-6 55s-44 13-87 19c-65 8-97 20-199 72-77 40-130 61-146 59-24-3-196-52-235-67-18-7-19-3-13 122 4 71 10 149 13 175l6 45-38 11c-22 6-77 19-124 28-149 29-312 87-294 105 42 40 168 138 220 171 35 23 64 47 64 53 0 44-36 192-50 206-16 16-15 19 12 49s28 35 15 54c-25 40-46 121-53 206-6 74-5 86 11 97 21 15 61 9 88-14zm86-59c-1-39-2-43-9-23-12 36-12 70 0 70 6 0 10-21 9-47zm121-73c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm158-49c50-39 77-70 68-78-3-4-17 2-31 13l-84 64c-33 25-60 48-60 53-1 12 68-21 107-52zm-504-172c-21-20-39-30-54-27-21 3-20 5 16 31 54 38 77 35 38-4zm39-86c3-5 8-32 12-60 6-49 5-53-14-53-16 0-21 6-21 29 0 16-3 43-6 60-5 24-3 31 9 31 9 0 18-3 20-7zm-23-170c-1-5-24-25-53-45-29-21-86-67-127-103-59-51-82-65-107-65-18 0-33 2-33 4 0 10 120 95 197 141 46 26 88 54 94 61 12 15 29 19 29 7zm929-217c-15-15-80 59-72 82 5 12 15 6 45-28 28-32 36-46 27-54zm-153 50c-45-38-111-79-86-53 26 27 105 86 115 86 6 0-7-15-29-33zm-930-125c75-32 135-49 262-77 45-9 82-22 82-27 0-6-40-8-102-5-79 4-127 13-203 38-87 28-205 83-205 96 0 2 22 4 49 4 32 0 73-10 117-29zm1105 11c-15-27-51-181-51-216 0-37-19-73-21-41-8 96 18 250 44 267 23 15 38 9 28-10zm147-604c-33-59-65-79-137-85-58-6-63-4-59 13 2 15 13 20 57 22 98 6 126 43 136 183 10 124 20 128 23 11 2-92 0-108-20-144zm-590 185c-2-12-35-25-123-49-135-37-148-39-143-21 5 13 41 27 163 62 98 29 107 29 103 8zm321-110c33-3 61-9 61-14 0-19-228 32-285 64-22 13-41 30-43 40-3 13 19 6 101-34 78-38 120-52 166-56zM309 949l32-11-33-23c-18-12-44-26-57-30-32-10-59-76-67-161-7-79 12-148 68-243 37-63 160-195 216-235 57-39 176-76 245-76 59 0 61 1 103 47 24 26 46 45 48 42 11-11-17-82-45-114-33-38-105-65-168-65-104 0-292 91-376 182a833 833 0 00-165 298c-27 78-31 104-27 150 12 112 65 207 131 236 38 16 54 17 95 3z" />
        <path d="M1532 2317c-8-9-6-24 8-54 21-47 30-55 50-43 12 8 12 15 1 47-22 61-38 75-59 50zM1460 2265c0-21 38-95 49-95 5 0 14 7 21 15 9 11 7 22-11 55-23 40-59 55-59 25zM1300 2100c-21-13 4-90 30-90 28 0 32 15 16 53-16 41-27 49-46 37zM1241 2036c-14-17 8-85 33-100 28-18 36 11 18 60-17 47-34 60-51 40zM1190 1956c0-33 20-66 40-66 22 0 25 15 10 54-10 28-50 37-50 12zM860 1122c0-10 11-29 25-42 24-22 27-23 42-7 16 15 15 18-7 42-28 30-60 33-60 7zM809 1074c-11-14-10-19 10-35 29-23 50-24 58-3 4 11-2 23-18 35-30 23-33 23-50 3zM2084 909c-9-16 8-29 52-40 59-13 74-11 74 10 0 32-109 58-126 30zM510 873c0-11 23-31 61-53a655 655 0 00265-321c5-29 11-39 25-39 65 0-4 157-129 291-93 101-222 171-222 122zM2040 843c0-12 11-23 33-31 50-18 77-15 77 7 0 25-8 30-64 37-41 6-46 5-46-13zM394 786c-7-17 12-46 29-46 18 0 120-80 170-134 73-78 116-147 125-196 6-36 12-46 30-48 19-3 22 1 22 31 0 19-7 52-16 73-57 136-336 383-360 320zM2435 2099c-10-15 57-120 75-117 26 5 22 36-10 83-30 44-52 56-65 34zM2380 2055c0-29 34-85 52-85 22 0 24 30 3 70-16 31-55 42-55 15zM4372 2867c-14-17-7-26 59-75 60-45 89-53 89-24 0 15-115 112-133 112-2 0-9-6-15-13zM4510 2861c0-20 73-81 96-81 32 0 25 26-16 62-47 42-80 50-80 19zM4343 2784c-7-18 42-63 70-64 26 0 21 36-9 59-32 25-52 27-61 5zM1280 2756c0-18 49-58 64-53 19 6 18 38-1 52-24 19-63 19-63 1zM1197 2713c-16-15-4-33 39-57 55-31 84-33 84-8 0 12-18 28-49 45-51 28-63 31-74 20zM1127 2653c-16-15-4-33 37-56 37-21 48-23 62-13 22 17 12 31-36 56-42 21-53 24-63 13zM5847 2633c-16-15-4-34 33-53 49-25 70-25 70-2 0 11-16 27-39 40-41 23-53 26-64 15zM3228 2580c-41-41-37-61 49-235 65-133 70-140 100-143 46-5 75 14 198 127 121 112 137 136 112 174-34 53-209 107-345 107-80 0-85-1-114-30zm292-80c73-24 92-36 67-46-10-3-55 5-100 20-46 14-108 28-140 32-31 4-57 11-57 17 0 16 158 0 230-23zm-51-72l64-21-60-58c-34-33-65-59-70-59-9 0-83 146-83 164 0 11 74-2 149-26zM4400 2580c-240-72-299-114-261-188 4-9 11-29 15-44l6-26-61 1c-80 2-93-13-83-99l6-62-43 10c-87 18-133 20-151 6-26-21-156-256-173-313-34-118-20-168 87-316 26-36 48-69 48-73s-21-16-47-27c-85-36-221-119-248-150-31-38-31-64 0-175 41-141 91-239 148-289 64-56 221-144 422-238 88-41 250-118 359-172 251-122 469-210 571-231 58-12 112-15 204-12 109 4 139 9 221 37 218 74 409 222 528 408 46 72 94 189 133 324 32 113 32 115 32 329 0 203-2 220-27 305-34 114-120 289-166 335-44 44-284 193-530 329-364 201-608 323-680 342a549 549 0 01-310-11zm241-60c42-12 59-39 84-136 17-67 19-114 5-114-5 0-10 8-10 18 0 42-42 178-60 196-12 12-46 25-87 32l-68 12 50 1c28 0 66-4 86-9zm-16-71c8-8 25-61 38-117l23-103 72-40c40-22 72-42 72-46 0-3-18-25-40-49s-40-51-40-60 30-47 66-85c46-47 62-70 53-74l-124-44c-163-58-248-97-263-120-14-21 1-56 92-214 16-26 27-49 25-51l-169-51c-171-49-208-64-228-87-17-21 7-101 57-191 23-41 41-77 41-80 0-9-69 13-149 48-122 53-113 53-196-3-95-64-194-99-235-82-15 6-33 24-38 38-24 63-32 97-32 131 1 34 5 39 73 80 154 95 257 172 257 192 0 25-34 93-70 139-15 19-46 68-69 108l-42 73 17 52c9 29 37 91 62 138l46 86 61-13c92-19 155-21 166-3 5 8 9 47 9 88 0 66 2 72 18 66 9-4 36-10 59-12 39-5 42-4 49 22 4 15 4 72 1 125l-6 98 68 21c135 43 246 51 276 20zm388-91c245-129 417-224 536-297 46-28 88-51 92-51s33-35 63-78c39-56 67-111 96-192 62-174 73-254 67-455-6-183-18-250-67-389a478 478 0 00-166-246c-76-73-110-96-234-162-193-103-218-108-490-103l-215 3-185 87c-102 48-189 90-195 95-5 4-91 45-190 92-195 90-359 177-352 185a1052 1052 0 01320 135l28 20 97-31c53-18 125-45 158-61 90-42 130-43 140-5 4 18-13 64-65 176-39 84-70 153-69 154l173 44c94 24 178 50 189 59 28 26 16 81-42 204l-50 108 47 14c84 25 308 116 343 139 55 37 50 63-31 153-39 44-71 82-71 85s20 19 45 37c76 53 57 92-75 153-89 41-90 42-90 78 0 33-12 98-26 144-3 9-2 17 1 17 4 0 102-50 218-112zm-806-135c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm713-87c0-2-12-12-27-21l-28-18 19 21c17 20 36 29 36 18zm-1040-62c0-10-20-53-44-98s-51-105-61-133c-13-40-21-53-36-53-16 0-19 5-14 23l12 42c8 30 126 235 135 235 5 0 8-7 8-16zm145 1c54-17 23-18-40-1-30 9-40 14-25 14 14 0 43-5 65-13zm825 1c0-3-5-8-12-12s-8-3-4 4c7 12 16 16 16 8zm50-121c30-30 50-55 44-55-5 0-34 25-64 55s-50 55-44 55c5 0 34-25 64-55zm1038-218c22-46 53-123 68-172 25-84 27-103 28-285 0-192 0-197-33-310-59-206-137-346-252-455a929 929 0 00-379-226c-63-20-95-24-200-24-74 0-149 7-185 15l-60 15 135 6c168 8 201 18 394 122 139 76 159 90 253 184a542 542 0 01175 273c52 154 68 255 68 440 0 197-13 279-70 439-22 62-40 115-40 119 2 19 62-68 98-141zm-1104 63c-55-24-196-71-201-67-4 5 217 86 232 86 6 0-8-9-31-19zm-1059-97c10-21 42-72 70-113 75-109 80-120 56-120-11 0-23 9-26 21-4 11-35 62-69 112-86 126-91 137-69 137 11 0 26-15 38-37zm791-65l18-53c4-11-4 0-18 25-27 48-30 60-18 60 4 0 12-15 18-32zm-695-234c-119-84-253-161-271-157-11 3-20 9-20 13 0 10 136 87 210 118 30 13 59 28 65 33 5 5 16 9 24 9 11 0 8-5-8-16zm769-13c-19-12-261-73-266-68-3 2 31 14 73 27 43 12 96 28 118 36 46 15 99 19 75 5zm-323-88c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm5-139l59-134c19-45 19-45 0-20-30 38-119 201-127 234-6 25-5 27 10 19 10-5 35-50 58-99zm-715-34c13-84 45-153 79-168 63-29 199 5 288 73 58 44 62 46 81 39 14-6 12-10-12-26a676 676 0 00-333-118h-51l-29 63c-25 57-70 188-70 207 0 5 8 6 18 3 13-3 20-21 29-73z" />
        <path d="M4610 2021c0-10 19-35 41-56 38-34 43-36 57-21 15 15 13 19-23 56-42 43-75 52-75 21zM4595 1940c-10-15 27-70 47-70 22 0 24 36 4 63-15 19-41 23-51 7zM4525 1910c-13-21 64-108 84-96 20 13 11 42-22 74-34 33-51 39-62 22zM4340 1605c-13-15-9-23 42-83 30-35 58-42 58-14 0 19-67 112-80 112-4 0-13-7-20-15zM4297 1553c-14-13-6-35 25-74 33-41 68-52 68-21 0 18-65 102-79 102-4 0-11-3-14-7zM4245 1499c-7-11 33-76 52-83 6-3 17 2 23 10 10 11 7 21-14 49-27 35-49 44-61 24zM5072 2227c-14-16 26-92 48-92 23 0 23 36 0 73-21 35-32 39-48 19zM5165 2199c-10-15 15-90 33-96 27-11 35 13 20 59-14 42-39 60-53 37zM5485 1861c-113-47-231-106-270-136-73-55-196-187-244-260-91-139-167-306-202-445a626 626 0 01-25-260c6-121 29-301 42-322 3-4 15-8 26-8 18 0 20 4 14 38-64 361-43 547 91 802 94 179 152 257 260 354 96 87 178 134 351 201 60 23 72 32 70 48-2 11-7 22-13 23-5 1-50-14-100-35zM5552 1737c-15-17 33-87 60-87 25 0 23 27-8 67-27 36-36 40-52 20zM5504 1676c-8-20 13-56 32-56 20 0 28 24 14 49-12 24-38 28-46 7z" />
        <path d="M5080 1273c0-9 11-30 24-47 12-17 31-46 40-63 18-37 56-46 56-15 0 32-77 142-100 142-12 0-20-7-20-17zM5003 1214c-7-19 23-80 43-88 7-3 18 1 24 9 9 10 5 23-15 54-27 44-42 51-52 25zM5170 690c0-24 59-56 84-47 27 10 18 32-19 50-47 22-65 21-65-3zM5067 673c-4-3-7-12-7-18 0-14 92-75 114-75 32 0 15 36-32 68-48 32-63 38-75 25zM5004 608c-4-7 11-27 37-49 52-45 77-56 93-39 8 9-1 22-39 56-50 44-78 54-91 32zM4937 565c-7-17 89-105 114-105 38 0 27 30-28 74-58 49-77 55-86 31zM5773 2583c-7-19 43-65 67-60 29 5 22 36-12 57-40 24-47 25-55 3zM5710 2230c0-34 28-90 44-90s20 10 16 45c-5 50-60 91-60 45zM5810 2151c0-42 10-61 31-61 14 0 19 7 19 29 0 42-10 61-31 61-14 0-19-7-19-29zM5894 2106c-11-30 0-61 24-64 21-3 23 0 20 35-3 40-32 59-44 29z" />
      </g>
    </svg>
    <p className="title">Holy Cow!</p>
    <p className="message">{children}</p>
  </ErrorComponent>
);

export default Error;
