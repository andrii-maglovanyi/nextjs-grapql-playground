import styled from "styled-components";

const EmptyComponent = styled.div`
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
  <EmptyComponent>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 4550 4800"
    >
      <g fill="#262424">
        <path d="M3602 4627c-27-12-62-75-62-109 0-37 37-98 99-163 64-67 101-125 101-159 0-24 17-46 35-46 7 0 23 35 37 78 24 71 25 85 18 172-9 109-41 195-83 223-30 19-109 22-145 4zm125-51c43-36 67-118 61-213-2-44-8-85-12-91-5-8-21 8-46 47-21 32-52 69-68 81-17 12-42 44-56 71-25 46-26 50-11 78 28 56 84 67 132 27zM3523 4114c-53-37-83-87-83-139 0-27-21-52-98-119-40-35-61-46-86-46-33 0-88-32-181-105a1930 1930 0 00-320-177c-47-27-185-69-238-73-32-3-66-9-76-14-10-6-60-12-111-13-81-3-93-1-108 17-21 25-77 45-123 45-42 0-133-41-147-67-9-15-32-20-140-30-72-6-143-18-158-26-16-8-47-17-69-20-39-6-209-36-426-76-59-10-116-24-128-31-12-6-79-31-148-56-206-73-278-128-339-259-26-55-29-70-30-192-1-98-6-143-19-177-36-94 0-212 76-251 28-15 29-17 29-93 0-56 7-96 25-147 13-38 25-78 25-87 0-10 16-64 36-120l41-123c11-38 154-271 228-368 79-107 207-225 335-309 103-68 279-152 375-178 121-33 125-35 125-69 0-21 8-35 28-50 47-33 80-37 114-11 18 14 38 20 51 17l117-32c114-32 179-30 340 11 225 57 300 113 456 344l122 180a5080 5080 0 01302 685c0 9 4 23 9 33 5 9 14 42 21 73 10 50 16 61 60 95 58 46 80 86 80 147 0 62-14 95-47 109-48 20-63 39-63 77 0 61 29 161 65 230 37 71 151 221 168 221 5 0 42 28 83 63 50 43 73 69 73 85 1 13 13 33 27 45s33 31 43 42c52 62 83 83 134 89 74 10 125 42 152 97 39 76 50 153 39 266-9 84-17 110-55 188s-53 97-109 142a755 755 0 01-252 143c-36 11-79 27-95 35-44 23-75 18-130-21zm276-97c86-43 119-66 185-132 67-66 85-91 105-145 41-108 43-269 6-327a350 350 0 00-172-103c-54-3-60-1-40 11 30 17 21 39-17 39-40 0-127 64-151 112l-15 32 25-24c14-13 25-30 25-37 0-8 6-13 13-11 6 1 39-10 71-26 49-23 69-27 117-24 50 4 61 8 93 43 20 21 39 49 42 62 9 35-2 102-19 121-8 9-21 36-28 60-15 51-29 55-29 8 0-19-6-41-14-49-10-10-13-31-8-82 4-50 2-66-7-61-6 4-11 30-11 58 0 51-24 118-42 118-6 0-8-13-4-32 15-74 18-118 9-118-6 0-13 19-16 43-2 23-10 56-18 72-7 17-13 41-15 55-1 14-18 57-38 95-29 57-31 64-11 40 14-16 25-33 25-37 0-13 28-9 32 4 2 6 14-5 27-25 12-20 27-37 32-37 26 0-8 109-45 139-8 7-18 26-21 42-9 40-63 74-147 95-142 35-186-4-201-176-2-29-4-31-11-15l-18 42c-7 13-8 50-5 90 6 63 9 71 47 106 40 37 43 38 93 32 33-4 90-25 156-58zm-114-166c-3-2-11 1-17 7-7 7-21 12-31 12-16 0-17 2-7 15 12 14 16 13 36-6 13-12 22-25 19-28zm-245-26l-20-40c-11-20-20-42-20-50 0-18-16-20-23-2-3 6-6 2-6-11-1-28-26-39-47-21-12 10-17 10-23 0-6-9-11-8-20 3-16 19-6 36 22 36 12 0 45 20 72 45 46 41 65 53 65 40zm185-92c8-20 13-38 11-41-4-3-36 63-36 74 0 14 12-2 25-33zm-80-65c55-108 113-195 169-257 23-24 32-39 21-33a736 736 0 00-155 158c0 8-11 31-25 52-31 47-76 172-61 172 2 0 25-41 51-92zm-363-39l4-40-34 6-33 6 3-38 3-38-36 3c-33 3-38 0-50-27-8-17-21-31-31-31-27 0-48-11-48-26 0-11-17-14-70-14-40 0-70-4-70-10 0-5 10-10 22-10s18-3 14-7c-4-5-20-8-34-8-20 0-27-5-26-17 1-14-6-18-37-18-28 0-39-4-39-15 0-10-10-15-31-15-24 0-30-4-25-15 4-11-2-15-24-15-17 0-30-4-30-10 0-5 5-10 11-10 5 0 7-5 3-11-12-20 19-29 102-29 60 0 85-4 94-15 11-13 1-15-79-15-67 0-96-4-107-14-20-21-18-26 15-26 31 0 59-24 42-35-6-3-27-3-47 1-34 6-37 5-31-15 4-17 1-21-19-21-13 0-28-9-34-20-11-20-11-20-50 2-45 26-63 18-32-15 35-38 30-50-25-61-29-7-38-1-121 73-50 45-93 81-96 81s-6-13-6-29c0-30-19-45-45-35-16 7-22-21-6-30 5-3 7-14 5-24-4-16 115-154 278-319 33-34 58-67 56-75-3-8-25 8-62 45-65 66-93 77-66 26 9-16 7-19-15-19-14 0-25 5-25 10 0 6-24 33-52 60-43 40-50 52-38 59 18 12 40-4 40-30 0-11 6-19 14-19 7 0 19-7 26-15s16-15 21-15c17 0 9 29-16 58-14 17-25 32-25 35s-22 29-50 57c-27 28-57 64-67 80-20 35-38 40-30 9 5-19 2-21-24-15-21 4-29 2-29-8 0-8-7-16-15-20-8-3-15-13-15-23 0-13-3-14-12-5-16 16-48 15-48-1 0-7 8-17 19-24 10-6 21-23 23-37 5-23 3-24-16-14-12 6-33 19-48 29-60 43-64 15-7-52 22-27 38-49 34-49s-29 12-55 27c-27 15-52 25-55 21-7-7 16-48 49-87l21-25-28 18c-16 10-35 15-42 12-8-3-23 6-34 19-21 28-41 33-41 11 0-8-3-21-6-29-6-15 17-30 174-114 46-25 86-43 88-40 3 3 1 15-5 26-10 18-9 20 6 14 10-3 25-11 33-18 8-6 32-20 53-30 21-11 41-23 43-27 10-15-26-8-58 12-56 34-62 22-13-27 45-46 46-76 2-35-12 11-33 23-47 27s-44 21-67 36c-46 32-62 35-82 17-11-11-12-9-7 9 8 25-22 47-49 37-10-4-15-2-13 6 3 14-119 66-130 56-3-4-1-10 6-15 7-4 22-21 35-38 12-16 24-30 27-30 8-1 80-44 80-49 0-2-7-1-15 2-22 9-18-9 8-40 15-17 29-25 39-21 20 8 62-19 89-56l20-29-25 10c-14 5-43 18-65 30-51 25-84 27-79 3 2-10 14-19 28-21s39-9 55-16l45-19c10-3 5-7-13-12-19-5-41-2-68 10-39 18-70 12-36-6 14-8 15-14 6-31-10-19-7-25 22-49 27-22 29-27 12-23-12 3-29 15-39 25-21 23-59 26-50 4 4-12 0-14-21-9-23 6-26 5-20-16 4-17 3-20-6-11-18 18-48 14-45-6 3-19-3-20-64-8-44 8-53-9-10-21 20-5 23-8 10-11-25-6-22-26 8-57 28-28 22-35-11-12-11 7-37 16-57 19-31 5-38 2-43-14-8-25-13-24-60 17-30 26-36 37-26 43 9 6 10 11 2 15-6 4-16 4-21 1-6-3-13 0-16 9-3 8-12 12-19 10-7-3-34 14-58 38-25 24-52 42-59 39-10-2-10 0-2 8 6 7 26 13 43 13 36 1 37 22 2 24-12 1-27 6-33 12-8 8-4 9 12 5 19-5 22-3 17 10s0 12 29-5c18-11 32-23 30-26-2-4 7-8 20-8 26-2 33 20 9 30-8 3-15 12-15 21 0 8-4 15-10 15-14 0-92 79-86 88 3 5 24 22 48 38s47 35 51 41c4 7 16 13 26 13s24 7 31 15c13 16 36 20 42 7 3-9 101-52 117-52 23 0 9 30-16 37-16 3-41 14-57 24l-28 17 73 49c41 26 78 54 82 61 4 6 13 12 20 12 16 1 154 104 239 180s171 182 198 243c11 25 25 49 30 52 6 3 10 22 10 41 0 63 13 74 84 74 119 0 408 66 556 127 53 22 140 68 230 122 36 22 70 40 76 40 7 1 14-17 16-40zm295-69c11-19 26-35 34-35s26-17 41-37c56-76 203-191 260-203 38-9 43-22 16-36-13-7-49-39-81-72-58-58-60-59-102-54-72 10-158 66-221 143-29 35-35 47-24 54 10 6 9 14-8 35-16 20-20 35-16 54 11 43 15 44 48 13l90-86c33-31 63-56 66-56 4 0 7 14 7 30 0 17-4 30-10 30-24 0-93 118-88 152 1 9-10 41-25 70-28 57-18 56 13-2zm-287-39c0-11-4-10-15 5-8 10-14 26-14 34 0 11 3 10 14-4 8-11 15-27 15-35zm135-81c28-55 18-69-12-17-26 45-34 67-23 67 5 0 21-22 35-50zm-1175-5c18-19 23-36 24-78 1-76-61-182-163-279l-136-128c-78-74-236-184-395-275-126-72-437-225-458-225-10 0-22-4-28-9-15-14-54-23-54-13 0 12 86 62 105 62 7 0 18 6 24 14 6 7 29 16 51 20 22 3 55 15 72 26 18 11 41 20 51 20s35 11 55 25 43 25 51 25 47 25 86 55c40 30 81 55 92 55 10 0 34 11 53 25s39 25 44 25c6 0 58 48 115 107 60 63 105 103 108 96 10-27 44-12 80 36 66 85 112 166 142 251 13 36 32 84 42 107 25 55 24 63-5 63-16 0-26-7-29-21-5-18-8-19-28-8-23 12-23 12 12 29 47 25 62 24 89-5zm915 5c3-5-3-10-14-10s-23 5-26 10c-3 6 3 10 14 10s23-4 26-10zm-1085-99c0-6-10-17-22-25-25-18-88-22-88-6 0 6-7 10-15 10-9 0-12 6-9 15 5 11 22 15 70 15 35 0 64-4 64-9zm845-41c-3-5-21-10-40-10s-37 5-40 10c-4 6 12 10 40 10s44-4 40-10zm-909-35c-9-7-41-16-71-20-38-4-55-11-55-21 0-8-6-14-14-14s-22-3-31-6c-13-5-16-2-13 12 2 14 25 25 93 45 90 26 123 27 91 4zm879 5c4-6-21-10-69-10-41 0-78 5-81 10-4 6 21 10 69 10 41 0 78-4 81-10zm374-13c8-11 5-13-19-9-17 2-33 8-36 13-9 14 42 10 55-4zm227-47c32-44 75-72 207-130 26-11 45-25 41-31a831 831 0 01-260-330c-22-53-48-223-41-269 1-8-2-17-8-20-15-8-54 120-55 178 0 37 9 74 30 124 32 75 48 95 173 216 42 41 77 78 77 82 0 8-118 88-168 114-18 9-62 20-97 23-36 3-70 12-76 19-6 8-20 14-30 14s-20 4-24 9c-3 6 17 7 50 4 38-4 55-2 55 6 0 6-6 11-14 11s-18 5-22 12c-5 8-2 9 12 4 43-17 74-19 74-4 0 31 44 13 76-32zm-2101 11c-12-11-75-25-75-16 0 8 41 24 65 24 11 1 15-3 10-8zm579 0c14-5 16-10 7-15-16-11-83 2-76 15 7 11 42 11 69 0zm-84-32c0-8 14-10 40-6 22 3 40 2 40-2 0-15-89-93-102-88-8 3-3 9 15 16 28 11 38 41 13 41-7 0-24-8-37-17-28-21-85-53-93-53-3 0-6 7-6 15 0 17-11 18-60 6-19-5-57-12-84-16-58-8-55 9 4 19 27 4 40 11 40 22 0 13 3 14 15 4 9-8 28-10 55-5 42 7 57 5 53-7-2-5 4-8 12-8s15 5 15 10c0 6 11 15 25 20s25 17 25 28c0 10 3 22 7 25 10 11 23 8 23-4zm-195-19c-3-5-15-10-26-10s-17 5-14 10c3 6 15 10 26 10s17-4 14-10zm-515-9c0-5-6-12-12-15-7-3 14-4 46-1 49 5 57 3 47-8-7-9-46-17-109-22a729 729 0 01-179-20c-13-4-23-11-23-15s-17-12-37-18l-38-10 34-1 34-1-26-20c-16-13-42-20-74-21-26-1-40-3-30-6 22-6 12-23-13-23-27 0-34-28-7-32 20-3 18-5-12-21-42-21-91-23-91-3 0 58 246 215 369 236 66 11 121 11 121 1zm2246-57l25-46-26-34c-35-46-83-80-125-89-19-4-37-11-40-16-7-10-132 10-140 22-3 4-17 10-30 12-100 19-122 29-85 37 17 3 37 3 45-1 16-8 243-29 249-24 10 11-15 25-44 25-19 0-37 5-40 10-4 6 13 10 44 10 55 0 71 21 29 35-20 7-18 9 15 12 20 2 37 9 37 14s-20 24-45 41c-25 18-45 34-45 38 0 3 34 4 75 3l76-2 25-47zm-155-5l24-20-40 6c-46 8-49 10-40 24 10 17 30 13 56-10zm-2126-9c-3-5-15-10-26-10-10 0-19 5-19 10 0 6 12 10 26 10s23-4 19-10zm760-62l-79-83c-5-5-2 4 8 20 16 26 123 133 135 135 2 0-27-33-64-72zm1626-72a664 664 0 01-147-186c-25-47-30-69-32-147-3-65 1-106 11-137 18-53 21-50-85-99l-78-36v33c0 44-14 54-104 76-79 20-211 96-223 128-4 9-16 29-28 44-13 15-26 44-30 65s-12 44-18 52c-10 12-9 13 8 7 121-48 194-66 269-66 45 0 98 5 119 11 36 10 37 11 37 60 0 72 21 105 83 133 102 46 196 140 185 184-4 15 5 12 49-16l54-36-70-70zm-2044 116c-12-13-27-17-53-14-44 5-33 19 21 25l44 5c2 1-3-6-12-16zm358-22c-41-43-84-65-130-68l-40-3 30 25c17 14 43 25 58 26 17 0 30 7 34 18 9 23 23 32 52 32h25l-29-30zm1379 14c9-3 16-13 16-21 0-10-6-13-16-9-9 3-22 6-30 6s-11 6-8 15c7 16 14 18 38 9zm-1509-13c-15-14-155-26-155-13 0 10 34 15 130 20 21 1 30-2 25-7zm-225-30c0-10-73-21-138-21-58 0-44 17 18 23 88 7 120 7 120-2zm1405-43c7-7 2-8-15-3-14 4-29 12-35 17-7 7-2 8 15 3 14-4 30-12 35-17zm-1290 2c-3-5-13-10-21-10s-14-4-14-10c0-5-6-10-14-10s-16-6-19-14c-6-16-45-28-53-15-3 5 2 9 10 9 19 0 21 11 5 27-12 12-12 12 56 26 37 8 56 7 50-3zm-127-21c-2-6-7-10-11-10l-48 1c-24 0-38 4-34 10 9 14 98 13 93-1zm-448-8c0-11-133-35-152-28-16 6-1 11 67 25 69 13 85 14 85 3zm685 0c-3-5-19-12-36-16-18-4-34-16-39-28s-9-16-9-9c-1 15-35 16-64 1-15-7-12-2 8 15 37 31 156 62 140 37zm1350-25c50-14 107-25 129-25 33-1 37-3 26-16-7-8-25-15-41-15-40 0-129 20-129 30 0 4-27 14-61 21-68 15-110 46-49 36 19-3 76-17 125-31zm-1625-6c11-6 16-17 13-28-4-15-11-17-45-13-43 6-66 31-29 31 12 0 21 5 21 10 0 13 16 13 40 0zm910-57c0-7-56 35-71 54-8 9 5 2 29-17 23-18 42-35 42-37zm-79 4l33-42-33 30c-18 17-37 38-43 49-16 30 7 11 43-37zm261 25c1-4 18-18 36-31s31-25 28-28c-5-6-105 69-105 80-1 9 36-9 41-21zm-1272 4c0-8 10-16 23-19 20-3 20-4 4-12-12-5-25-1-40 12-12 11-29 23-37 26s0 6 18 6c21 1 32-4 32-13zm-524-48c-7-21-15-41-19-44-4-4-7-16-7-26 0-34-33-17-35 17-2 57 9 89 35 96 35 9 41-1 26-43zm266 34c23-23-161-53-188-31-13 10-11 15 13 30 22 15 42 18 97 14 38-2 73-8 78-13zm2060-20c9-9 8-12-5-12-32 0-117 22-113 29 7 11 104-3 118-17zm-1447-1c-21-20-87-51-107-51-31 0-15 11 50 37 66 25 69 26 57 14zm1032-3c6-7 13-25 15-41 4-22 3-25-8-16-8 6-14 16-14 22s-7 19-17 29c-14 16-14 18-1 18 9 0 20-6 25-12zm-366-68c17-20 24-37 18-39-12-4-61 40-92 83l-21 29 33-19c18-10 46-35 62-54zm864 60c3-6-5-10-19-10s-28 5-31 10c-3 6 5 10 19 10s28-4 31-10zm50-47c-11-73-28-85-122-85-82 1-185 30-236 68-21 15-21 16 13 9 19-4 70-18 113-31 82-25 137-31 137-14 0 6 8 10 18 11 9 1-1 6-23 11l-78 19c-49 13-39 30 10 18 21-5 53-9 72-9 33 0 34 1 15 15-18 14-17 14 14 15 17 0 32 5 32 10 0 6 9 10 21 10 18 0 20-4 14-47zm-2020 17c-3-5-19-10-36-10-16 0-29 5-29 10 0 6 16 10 36 10 21 0 33-4 29-10zm1075-85c28-29 43-31 70-8 21 18 27 43 10 43-5 0-10 6-10 14s23-8 53-36c28-27 62-54 75-59 20-8 32-39 15-39-12 0-83 52-83 61 0 5-9 9-20 9-30 0-24-12 23-45 33-23 38-30 24-33-11-2-29 6-41 17-23 22-46 28-46 12 0-5 7-14 16-21 8-8 19-21 24-30 8-16 4-17-38-12-36 4-63 17-119 59-40 30-73 56-73 59 0 6 89-44 111-63 18-15 59-18 59-3 0 6-3 10-8 10-12 0-111 90-122 111-10 18-9 18 23-1 18-11 44-31 57-45zm337 29l51-65c30-38 36-49 29-49-2 0-29 32-61 70-31 39-53 70-47 70s18-11 28-26zm-1338 0c3-2 0-9-5-14s-19-1-34 11l-25 21 30-7c16-4 32-9 34-11zm166-4c-3-5-15-10-26-10s-17 5-14 10c3 6 15 10 26 10s17-4 14-10zm-613-32l-22-22v21c0 12 7 23 18 25 27 6 28-1 4-24zm533 22c-3-5-20-10-36-10-18 0-28 4-24 10 3 6 20 10 36 10 18 0 28-4 24-10zm1363-2c5-7 13-24 16-38 7-24 7-25-9-5-25 31-37 55-27 55 5 0 14-6 20-12zm-1998-17c0-5-7-14-15-21-12-10-15-10-15 2 0 8 3 18 7 21 9 10 23 9 23-2zm535-31c-3-5-21-10-40-10s-37 5-40 10c-4 6 12 10 40 10s44-4 40-10zm-531-42c18-35 20-58 6-58-11 0-40 53-40 75 0 25 18 17 34-17zm286 8c0-2-18-13-40-25-43-22-75-28-65-11 3 6 15 10 27 10 14 0 18 5 14 15-7 20 24 36 46 24 10-5 18-11 18-13zm421 5c-31-23-90-57-76-44 13 14 88 63 95 63 3 0-6-9-19-19zm-517 0c3-5-13-11-37-13-47-5-52-4-42 11 8 13 72 15 79 2zm361-1c-3-5-15-10-26-10s-17 5-14 10c3 6 15 10 26 10s17-4 14-10zm-122-45c9-22-8-26-21-4-10 15-10 19 2 19 8 0 16-7 19-15zm-138-54c-6-5-30-12-55-16-40-7-43-6-31 9 8 10 29 16 54 16s37-4 32-9zm-239-16c18-14 18-14-7-15-15 0-32 7-39 15-10 12-9 15 7 15 10 0 28-7 39-15zm1319-15c3-5 16-10 28-10 13 0 58-20 101-45 56-31 91-45 117-45 32 0 42-6 65-35 15-20 46-47 69-61 23-13 51-34 61-45 34-38 105-81 124-76 13 3 24-3 35-19 20-30 19-36-2-25l-45 21c-15 7-60 39-100 71-53 43-81 59-104 59-18 0-38 8-49 20-10 12-38 29-62 40-24 10-43 24-43 29 0 12-171 101-194 101-7 0-19 7-26 15-10 12-10 15 3 15 9 0 19-4 22-10zm899-74c33-15 77-29 100-32 23-4 52-13 65-21 24-15 24-20 5-105-9-38 17-37 76 3 49 33 151 87 135 71-5-5-64-50-130-99-67-49-173-132-236-184l-204-164c-48-38-101-82-116-97-16-16-31-28-35-28s-24-20-46-45-45-45-51-45c-26 0-344-309-383-372-13-21-29-38-34-38-16 0-12 30 5 36 8 4 15 13 15 21 0 18-56 138-81 175a91 91 0 00-19 37c0 7-10 25-22 41-28 38-19 46 23 21 35-21 59-27 59-13-1 4-25 22-55 41s-72 53-92 75l-38 40 35-27c74-58 214-147 229-147 19 1 19 1-112 92-60 42-84 64-75 69 12 8 52-11 73-35 23-25 123-78 138-73 6 2-7 14-29 27-72 43-193 135-194 146 0 7-9 14-19 17-11 2-27 19-35 36-15 27-15 31-1 31 8 0 15-9 15-21 0-15 5-19 19-14 11 3 24-1 32-11 23-28 93-71 126-78 56-13 58 6 3 25-28 10-68 34-88 53-49 49-26 45 38-5 28-22 59-39 68-37 12 3 2 15-37 43-45 32-51 40-35 45 13 5 24 0 37-17 21-26 37-30 37-9 0 8-16 27-35 42-36 27-46 54-20 54 8 0 15-4 15-9 0-15 74-60 110-67 33-6 34-6 15 9-11 9-28 17-37 17-10 0-22 9-28 19-5 11-26 29-46 41-26 17-32 25-22 31 8 6 14 3 16-6s8-13 13-9c6 3 25-6 44-20 38-29 55-33 55-11 0 8-4 15-9 15-4 0-20 11-35 25-47 43-84 58-118 46-25-9-29-8-26 6 2 9 11 21 20 26 16 11 32 6 93-26l50-26c17-8 40-25 52-38s32-23 44-23c20 0 17 4-19 35-48 42-49 72-2 49 15-8 31-21 34-29s12-15 21-15c8 0 15-4 15-10 0-5 7-10 15-10s15 5 15 10c0 6-7 10-15 10s-15 6-15 13c0 8-11 20-25 27s-25 20-25 27c0 8-4 12-9 8-10-6-26 13-18 21 4 5 116-51 132-67 5-5 15-9 22-9 27 0 11 19-41 49-52 29-95 67-48 42 12-6 24-16 27-21 11-18 27-10 22 10-7 27 22 27 65 0 34-21 58-26 58-12 0 4-24 22-53 39s-61 41-72 54l-20 22 22-12c12-6 25-16 28-21 3-6 18-10 32-10 18 0 24 4 19 15-8 21 8 19 29-5 10-11 27-20 38-20 10 0 32-8 48-17 19-12 32-14 37-8 5 7 18 7 41-1 19-6 28-13 21-16-16-5-4-28 15-28 16 0 29 35 20 50-3 5-1 10 4 10 6 0 11 9 11 20 0 13-21 34-65 62-35 24-65 45-65 48s9 20 20 38c20 33 21 34 46 17 35-22 43-11 14 20-13 14-21 27-18 30s11-1 18-10c15-18 40-20 40-2 0 22 58 14 76-11 8-12 23-21 32-20 11 2 16-3 14-14-2-12 4-18 18-18 13 0 20-7 20-20 0-12 7-20 16-20 27 0 8 50-37 95-45 46-51 63-14 39 14-9 25-21 25-27 0-13 50-67 62-67 13 0 9 37-6 49-8 6-19 25-26 41-7 17-18 30-24 30s-11 15-12 33c0 17-4 41-9 52-7 15 0 13 31-12 22-17 66-43 98-57zm-1858 59c-22-16-57-21-40-6 7 8 29 15 54 20 3 0-4-6-14-14zm1559-25c21-23 13-39-9-21-8 7-19 10-24 7-6-3-12 3-15 14-7 27 24 27 48 0zm-1235-32c0-5-11-1-25 8s-22 20-19 26c6 10 44-19 44-34zm-460 12c0-5-21-10-46-10-27 0-43 4-39 10 3 6 24 10 46 10 21 0 39-4 39-10zm430-49l25-24-38 21c-46 27-54 27-60 5-4-17-4-17-12 0-5 12-1 25 11 38 17 19 19 19 34 2 8-10 26-29 40-42zm-757 33c-10-28 25-44 94-44 49 0 63-3 63-15 0-8 9-15 20-15s20-4 20-10c0-10-50-14-135-11-30 2-47 9-67 32-34 35-38 79-8 79 14 0 18-5 13-16zm355-33c2-6-12-18-31-26a94 94 0 00-72-4c-41 12-39 19 8 35 39 13 90 11 95-5zm1732 3c0-9-5-14-12-12-18 6-21 28-4 28 9 0 16-7 16-16zm-1507-28c23-18 22-29-3-14-10 7-23 9-27 5-4-5-3-11 3-15 13-8 29-52 19-52-14 0-45 22-45 32 0 6-8 17-17 24-17 12-16 13 4 14 12 0 25 5 28 10 8 13 16 12 38-4zm1283-12c19-15 34-31 34-37 0-5 8-16 18-23 9-7 12-14 5-14-12 0-103 81-103 93s10 8 46-19zm-1176-50c0-22-2-24-14-14-8 6-12 18-9 26 9 23 23 16 23-12zm2186-9c7-19 14-44 14-57 0-28-37-68-63-68-11 0-28-6-36-13l-111-72c-52-32-133-84-180-115l-146-93c-34-20-79-54-101-75s-46-41-54-44c-31-13-149-119-231-210-49-52-88-97-88-100 0-2-24-29-53-59s-72-80-95-111-62-78-86-105c-49-52-184-250-221-324-28-54-72-109-88-109-6 0-21 9-33 21l-23 21 30 47c16 27 56 78 90 114 33 37 55 67 48 67-8 0-7 6 4 18 10 10 17 23 17 27 0 5 24 33 53 63 38 38 48 55 39 61-10 6-10 10 3 21 8 7 15 20 15 29 0 10 11 28 25 41s23 30 21 37c-6 15 110 129 224 221 41 33 109 90 150 126 141 123 244 211 304 260 34 27 84 70 112 96s68 57 90 68c21 12 62 42 89 68 46 43 153 104 183 104 6 0 12 7 12 15 0 24-40 18-100-16-40-21-49-24-35-10 29 29 152 91 181 91 19 0 29-8 40-35zm-2526-60c0-9-4-13-10-10-5 3-10 14-10 25 0 10-7 21-16 24-8 3-12 11-9 16 8 13 45-32 45-55zm1270 31c0-2-13-1-30 2-29 4-37 12-24 25 5 5 54-20 54-27zm-1392 2c3-15-1-15-27-5-33 12-31 30 2 25 12-2 23-11 25-20zm1273-29l34-29-30 15c-16 8-41 24-55 35-23 18-23 19-4 14 12-3 37-19 55-35zm-1355-53c-1-59-9-87-21-74-9 8-18 126-11 143 5 13 10 15 19 6 9-7 13-33 13-75zm438 41c8-12 7-21-6-33-15-15-17-15-27 4-22 41 9 67 33 29zm1048-23c20-18 48-40 62-50 15-9 25-19 22-21-7-8-63 26-69 41-3 8-24 24-46 35-46 24-61 42-29 34 13-4 40-21 60-39zm-842 6c0-18-19-11-30 11-11 19-10 20 9 9 12-6 21-15 21-20zm-160-3c0-20 82-87 106-87 3 0 4 12 2 27-2 16 2 28 11 31s12 0 8-10c-3-10 3-19 19-27 33-15 30-28-7-33-42-6-102 15-114 40-5 11-17 23-27 25-19 5-26 47-8 47 6 0 10-6 10-13zm210-39c0-17-3-18-14-8-8 6-12 18-9 26 7 19 23 7 23-18zm49-34c3-16 1-17-13-5-19 16-21 34-3 29 6-3 14-13 16-24zm-458 6c18-10 27-40 12-40-10 0-43 32-43 42 0 11 7 10 31-2zm816-16l43-31c9-10-54 25-75 41-33 25-9 18 32-10zm141-15c50-22 53-29 10-29-22 0-45 11-68 31-31 27-32 29-10 23 14-4 44-15 68-25zm-1048 6c16-19 3-40-16-24-15 13-19 39-5 39 5 0 14-7 21-15zm1161-2c9-10 31-26 49-36 25-13 30-21 22-29-9-9-19-6-42 10-16 12-36 22-44 22-20 0-33 23-17 28 11 4 11 6 0 13s-11 9 1 9c9 0 23-8 31-17zm89 2c16-19 0-19-26 0-16 12-16 14-3 15 9 0 22-7 29-15zm-1092-7c7-7 12-20 12-29s15-28 34-43c19-14 36-36 38-48s9-23 17-26c10-3 11 3 6 28l-10 55c-1 13-10 36-20 51l-17 27 36-28c20-15 36-36 36-47 0-10 7-21 15-25 19-7 34 5 20 15-12 8-18 52-7 52 4 0 20-14 36-30 28-29 56-39 56-21 0 5-7 14-15 21s-15 17-15 22c0 16 44-2 67-28 12-13 27-24 33-24 5 0 10-5 10-11s9-9 19-6c14 3 18 1 14-9-3-9 2-14 15-14s21-8 24-24c6-30 1-37-34-55-24-12-30-12-53 3-22 14-25 14-25 1 0-19-14-19-30 0-7 9-21 13-30 10-24-8-70 11-70 29 0 7-7 19-15 26-12 10-15 10-15-2 0-8 5-19 11-25 9-9 6-11-12-9-70 9-100 20-111 40-6 11-23 36-38 54-24 29-26 37-16 58 13 27 17 29 34 12zm462-45c0-13-3-13-15-3-8 7-15 19-15 27 0 13 3 13 15 3 8-7 15-19 15-27zm-61-30c1-7-3-13-9-13-5 0-10 15-9 33 0 27 2 29 9 12 5-11 9-26 9-32zm1865-5c-13-99-118-366-235-600-76-151-73-128 16 112 50 135 89 273 100 356 8 54 12 101 10 105-5 7 94 77 113 79 1 0 0-24-4-52zm-1424-3c0-6 14-19 30-28 17-10 30-25 30-33 0-21-4-19-62 33-64 56-69 65-29 50 17-6 31-16 31-22zm-1130 1c0-8 9-16 21-19s18-10 14-16c-11-18-24-12-40 19-17 34-19 44-5 35 6-3 10-12 10-19zm770-99c0-16-19 4-34 36l-16 32 25-30c14-16 25-34 25-38zm1360 59c0-4-127-110-209-175-90-70-36-20 89 83 114 95 120 99 120 92zm-1866-42c23-16 66-102 60-119-3-7 4-15 15-18 23-6 29-27 9-27-45 0-89 23-103 53l-16 32 25-30c30-35 47-25 23 13-10 15-25 41-32 59-8 17-19 34-25 38-5 3-10 10-10 15 0 11 26 3 54-16zm719 4l36-18c8-3 16-11 18-17 7-19-45-2-68 23-25 26-21 30 14 12zm-833-48c6-10 20-20 31-22 25-3 47-48 25-48-20 0-59 34-79 69-15 26-16 30-2 25 8-4 20-15 25-24zm295 9c17-6 44-29 63-54 33-46 28-61-8-25-14 14-26 18-35 12-13-7-12-11 5-30 24-25 26-42 5-42-8 0-22 15-31 33-9 17-32 50-50 71-19 22-34 43-34 48 0 9 31 4 85-13zm1958-26c-3-27-32-129-65-228-103-308-134-376-217-475-26-30-54-66-63-80-33-52-183-203-241-242-33-23-80-47-105-54-53-16-158-18-167-4-4 6 6 10 23 10 52 0 294 136 325 183 8 12 42 51 76 87 62 65 201 262 201 285 0 7 8 23 18 36s24 44 32 69c7 25 17 50 21 55 18 25 26 110 18 177-11 88-7 105 39 146 55 49 96 81 103 82 4 0 4-21 2-47zm-2413-37c0-60 256-424 347-493l112-90c240-197 481-320 551-283 18 10 22 9 27-9 5-20 7-20 18-5 6 10 17 14 23 10 9-5 6-18-8-46-11-22-20-46-20-54 0-25-15-26-91-5-97 26-266 102-352 156a1534 1534 0 00-527 578c-56 92-111 211-117 251l-6 39 21-19c12-11 22-24 22-30zm130 15c16-30 13-46-5-31-8 7-15 19-15 27 0 9-6 13-15 10-8-4-17-2-20 3-4 6 5 10 19 10 15 0 30-8 36-19zm462-40c7-21 6-21-22 6-17 15-30 32-30 37 0 16 43-20 52-43zm-170-16c8-14 2-12-21 9-17 17-31 34-31 39 0 14 39-23 52-48zm1773-38c-4-18-14-37-22-44-11-9-13-24-8-66 4-32 3-57-3-61-5-3-12 16-16 44-10 74-24 60-21-20 2-38-1-70-6-70s-9 9-9 20-7 20-15 20-15 5-15 10c0 6-5 10-11 10s-9-9-6-20c7-26 0-25-23 3-26 31-35 16-21-37 12-51 15-123 4-112-5 4-13 26-18 49-9 35-15 42-38 44-29 2-33-9-18-49 15-39 25-142 14-135-6 4-13 26-16 49-7 46-27 98-39 98s-10-19 7-74c8-27 15-65 14-85-1-33-3-30-21 29-11 36-27 72-35 80-14 13-15 10-8-34 4-33 3-46-4-41-6 3-11 15-11 25 0 25-10 50-21 50-12 0 0-81 14-99 9-10 7-16-7-26s-16-21-10-51c5-26 4-35-5-30-6 4-14 25-17 46-6 38-7 38-50 38-44 0-56-12-33-35 16-16 29-82 22-115-6-29-23-29-23 1 0 21-22 71-32 71-12 0-10-21 6-72 14-46 8-76-13-64-6 4-11 18-11 31s-5 27-10 30c-6 4-8 11-5 16 4 5-1 9-9 9-9 0-16 5-16 12 0 6-2 9-5 6-3-2 2-28 11-57 8-29 13-58 11-64-2-7-9 6-16 28-13 48-27 72-37 62-4-3 1-26 10-50 9-23 16-47 16-52 0-15-58 88-61 111-4 23 37 84 57 84 8 0 14 8 14 19 0 10 6 24 14 30 11 10 16 8 21-8 7-22 25-29 25-10 0 6-4 18-9 27-7 13-4 25 8 41l18 24 7-27c3-14 11-26 16-26 13 0 13 30 0 50-11 18 15 50 42 50 10 0 88 64 173 143 85 78 169 149 185 157s30 20 30 26c0 15 22 34 32 28 5-3 6-20 3-37zm-2020 7c9-15 38-46 64-70 25-24 41-44 36-44-6 0-33 24-61 53-63 65-79 87-66 87 5 0 17-12 27-26zm70-9c17-14 25-25 18-25s-25 11-40 25c-36 32-17 32 22 0zm874 1c19-23-4-28-24-6-15 17-16 20-3 20 9 0 21-6 27-14zm-283-22c-3-9-6-21-6-27s-7-4-16 5c-18 18-11 38 13 38 10 0 13-6 9-16zm1004-7l-66-58c-42-36-41-34 9 14 33 31 62 57 66 57 3 0-1-6-9-13zm-935-8c10-15-1-22-24-14-12 3-19 11-16 16 8 12 32 11 40-2zm111-84c10-8 27-15 36-15 11 0 15-5 12-14-3-8-1-17 5-21 16-9 13-25-5-25-9 0-18 9-21 19-3 11-18 24-34 30-16 5-29 17-29 25 0 20 11 20 36 1zm-366-19c6-8 21-16 33-18s23-11 25-20c5-27-11-22-52 17-21 19-33 35-28 35s15-6 22-14zm193-78c18-14 29-29 25-33-9-9-116 77-117 93-1 14 22-1 92-60zm841 51c-10-11-28-25-39-31-11-5-4 4 15 21 41 36 51 40 24 10zm499-44c-3-8-9-15-14-15-10 0-12 24-3 33 11 11 24-3 17-18zm-1506-15c11 0 30-11 44-26 21-22 21-24 4-18-31 12-93 52-101 66-4 7 2 5 13-4 11-10 29-18 40-18zm397-32c-3-10-1-24 4-31 11-15 25-188 16-211-12-32-23-15-19 30 4 36 1 50-11 59-19 13-22 67-5 73 16 5 14 27-4 42-12 10-13 16-4 26 8 10 9 18 0 27-14 18-2 30 16 16 7-7 11-20 7-31zm-272 13c9-11 14-22 11-25-9-9-64 24-58 34 10 16 29 12 47-9zm208-16c0-13-4-26-9-29-11-7-24 41-16 55 10 15 25 0 25-26zm1092-29c2-17-2-31-9-33-9-3-13 8-13 38 0 47 16 44 22-5zm-1248 5c3-5 26-18 51-30 54-26 61-48 8-26-50 21-83 43-83 55s17 13 24 1zm-24-37c22-15 40-31 40-35 0-5 9-9 20-9 27 0 70-29 70-46 0-19-13-17-43 6-31 25-66 28-47 5 7-9 29-23 48-32s30-19 24-21c-14-4-84 32-101 52-8 9-22 16-32 16s-21 5-24 10c-8 13 11 13 37-1 11-6 22-8 25-6 9 10-30 57-48 57-19 0-32 13-22 24 9 9 9 9 53-20zm191-66c2-59-2-75-19-64-12 7-25 122-16 137 14 23 33-17 35-73zm-279 7c16-14 35-25 42-25s21-9 31-20c24-27 10-26-89 7l-82 28c-1 0-5 10-8 22-13 42 51 35 106-12zm1376-2c6-15 12-30 12-34s-25-43-56-86c-151-214-172-237-254-290l-81-54c-49-33-64-29-67 19-2 29 0 42 7 37 6-3 11-13 11-21s5-14 11-14c12 0 8 46-6 83-5 12-2 17 10 17 9 0 19-9 22-20s12-20 20-20c12 0 13 6 8 28-15 55-12 67 17 64 14-1 29 2 33 7 3 6 13 7 21 4 10-4 17 2 21 16 3 11 13 21 23 21s20 6 23 14c4 9 14 12 26 9 17-4 22 0 27 27 4 17 13 34 20 37 8 3 14 17 14 31 0 24 53 92 72 92 4 0 8-12 8-26 0-49 25-19 28 34 3 58 11 65 30 25zm-908-18c0-19-4-35-10-35-5 0-10 16-10 35s5 35 10 35c6 0 10-16 10-35zm-520-33c0-5 23-15 51-22 27-8 52-18 55-22 8-12-10-10-60 7-25 9-49 14-54 13-6-2-10 0-11 5-3 19 0 27 9 27 6 0 10-4 10-8zm240-47c19-12-1-25-28-19-45 11-67 25-52 34 12 7 57-1 80-15zm858-54c7-75-13-63-24 14-9 57-8 64 4 51 8-8 17-37 20-65zm-403 50l-55-47c-44-39-44-39-22-7 24 34 59 63 76 63 6 0 6-3 1-9zm-733-16c5-6 8-6 8 2 0 17 79 4 118-19 17-11 32-21 32-23 0-9-88 10-108 23-16 11-26 12-30 5-5-8-17-7-40 2-17 8-32 16-32 18 0 8 45 1 52-8zm1587-7c-13-25-79-121-142-208-76-103-189-210-222-210a2740 2740 0 01341 396c27 45 44 61 23 22zm-1069 2c0-5-11-10-25-10s-25 5-25 10c0 6 11 10 25 10s25-4 25-10zm-265-30c18-20 18-20-16-9-46 16-59 29-28 29 14 0 34-9 44-20zm1025-8c0-5-7-17-15-28-14-19-14-19-15 2 0 11 3 24 7 27 9 10 23 9 23-1zm-1020-37c10-13 9-15-12-15-13 0-33 7-44 15-18 14-17 14 12 15 17 0 37-7 44-15zm274-17c8-14 6-22-11-40-18-18-24-19-37-9-19 16-12 31 15 31 10 0 19 5 19 10 0 6-9 10-20 10s-20 5-20 11c0 16 42 6 54-13zm-194-18c0-23-6-33-22-39-29-11-39-5-31 16 8 20 35 51 46 52 4 1 7-13 7-29zm310 27c0-2-18-21-41-42l-41-40 28 43c15 23 34 42 41 42s13-1 13-3zm-539-47l24-19-34 9c-43 12-64 30-34 30 11 0 31-9 44-20zm159 11c0-14-18-23-30-16-6 4-8 11-5 16 8 12 35 12 35 0zm619-27c29-24 40-45 24-44-5 1-26 16-47 35-46 41-24 49 23 9zm-38-30l24-25-29 11c-41 15-47 20-41 31 10 14 20 11 46-17zm-471-49c-6-12-41-8-55 6-7 7 1 9 25 7 19-2 33-7 30-13zm80-5c0-11-4-20-10-20-5 0-10 9-10 20s5 20 10 20c6 0 10-9 10-20zm341-16l24-26-30 13c-39 17-38 16-30 28 8 15 8 15 36-15zm177-113c4-26-17-55-25-33-6 16-28 15-43-3s-98-31-112-17c-7 7 3 12 31 17 23 4 41 11 41 16s8 9 19 9c10 0 21 9 24 21 8 31 61 23 65-10zm-258-62c0-24 68-55 140-65 28-4 50-11 50-17 0-11-49-5-170 24-108 25-117 30-103 61 9 20 17 24 47 20 27-3 36-9 36-23zm105-119c3-5-3-10-14-10s-23 5-26 10c-3 6 3 10 14 10s23-4 26-10z" />
        <path d="M1690 2671c0-5 7-14 15-21s15-20 15-30c0-21 25-44 39-36 5 4 12 2 15-3s15-7 26-4c36 9 17 44-40 75-56 30-70 34-70 19zM1580 2586c0-9-8-16-20-16-13 0-20-7-20-20 0-11 3-20 8-20 4 0 18-9 32-20 24-19 24-19 3-13-13 3-23 1-23-5 0-5 12-13 26-16 32-8 60 20 41 43-9 11-7 12 8 9 20-4 21-10 9-60-5-21-3-28 9-28 16 0 30 26 22 40-3 4 6 15 19 24 18 12 26 12 29 3 4-9 6-9 6 0 1 9 9 9 34 1 17-6 36-15 42-19 14-13 25-11 25 6 0 8-12 18-27 21-16 4-41 16-56 27-16 10-31 16-34 13s-12-1-19 5c-8 6-28 15-46 19s-41 11-50 15c-13 5-18 2-18-9zM1440 2533c0-9 8-25 18-37 11-13 5-11-19 7-20 15-44 27-54 27-17 0-17-1-2-18 10-10 14-22 10-27-5-4-2-5 5-1 8 5 28-6 52-28 39-35 70-46 70-25 0 6-10 19-22 29l-23 19 30-8c17-5 29-13 28-20-3-12 23-15 30-3 6 9-29 53-36 46-3-3-3 3 0 14 4 15-3 22-28 31-44 15-59 14-59-6zM1850 2470c0-24 15-27 24-4 9 22 8 24-9 24-8 0-15-9-15-20zM1607 2370c3-11 14-20 24-20 23 0 24 7 5 26-21 20-35 17-29-6zM1500 2355c0-9 9-15 21-15 18 0 19 2 5 15-8 8-17 15-20 15s-6-7-6-15zM1550 2333c0-10 66-53 80-53 21 0 8 17-29 38-42 24-51 26-51 15zM2640 2342c0-13 94-102 108-102 22 0 12 17-38 64-46 43-70 56-70 38zM2540 2295c0-8 7-15 15-15s15 7 15 15-7 15-15 15-15-7-15-15zM2662 2264c4-18 54-51 64-42 7 8-44 58-58 58-5 0-8-7-6-16zM2590 2261c0-13 50-51 66-51 23 0 16 17-15 39s-51 27-51 12zM2370 2171c0-12 58-47 93-55 55-13 21 29-42 51-43 15-51 16-51 4zM2534 2085c24-18 39-20 34-2-3 6-15 13-29 15-23 2-23 2-5-13zM2380 2071c0-10 30-24 37-17 3 3 2 9-2 15-8 13-35 15-35 2zM2310 1930c0-5 9-10 20-10s20 5 20 10c0 6-9 10-20 10s-20-4-20-10zM2133 1765c-18-19-16-35 3-35 20 0 47 27 39 40-9 14-28 12-42-5zM1237 2064c-14-14-7-54 9-54 10 0 14 6 10 15-3 9 0 15 10 15 9 0 14 6 12 13-5 14-31 21-41 11zM1370 2007c0-17 38-53 46-44 4 4 1 13-6 22-9 11-9 15-1 15 7 0 9 5 6 10-9 15-45 12-45-3zM2544 1394l6-20c0-2 5-4 10-4 6 0 10 9 10 20 0 12-7 20-16 20-11 0-14-5-10-16z" />
      </g>
    </svg>
    <p className="title">No Booze</p>
    <p className="message">{children}</p>
  </EmptyComponent>
);

export default Error;
