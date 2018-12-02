"use strict";Vue.component("service",{props:["title","image","description"],template:'\n  <div class="service">\n    <div class="service__card">\n      <div class="frontside" :style="{background: \'url(\' + image + \')\'}"></div>\n      <div class="backside">\n        <h3>{{ title }}</h3>\n        <p>{{ description }}</p>\n      </div>\n    </div>\n  </div>\n  '}),Vue.component("affiliate",{props:["name","image","phone"],template:'\n  <div class="affiliate__card" :style="{background: \'url(\' + image + \')\'}">\n    <div class="affiliate__caption">\n      <h3>{{ name }}</h3>\n      <p><span class="fa fa-phone"></span>{{ phone }}</p>\n    </div>\n  </div>\n  '});var vm=new Vue({el:"#app",data:{services:[{title:"Service 1",image:"http://via.placeholder.com//300/300",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta autem nulla quas dolores corrupti enim nemo provident, officiis consequuntur quae id magni aut, illo"},{title:"Service 2",image:"http://via.placeholder.com//300/300",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta autem nulla quas dolores corrupti enim nemo provident, officiis consequuntur quae id magni aut, illo"},{title:"Service 3",image:"http://via.placeholder.com//300/300",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta autem nulla quas dolores corrupti enim nemo provident, officiis consequuntur quae id magni aut, illo"},{title:"Service 4",image:"http://via.placeholder.com//300/300",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta autem nulla quas dolores corrupti enim nemo provident, officiis consequuntur quae id magni aut, illo"},{title:"Service 5",image:"http://via.placeholder.com//300/300",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta autem nulla quas dolores corrupti enim nemo provident, officiis consequuntur quae id magni aut, illo"},{title:"Service 6",image:"http://via.placeholder.com//300/300",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta autem nulla quas dolores corrupti enim nemo provident, officiis consequuntur quae id magni aut, illo"}],affiliates:[{name:"clinica 1",image:"http://via.placeholder.com//250/250",phone:"0500 000 00 00"},{name:"clinica 2",image:"http://via.placeholder.com//250/250",phone:"0500 000 00 00"},{name:"clinica 3",image:"http://via.placeholder.com//250/250",phone:"0500 000 00 00"},{name:"clinica 4",image:"http://via.placeholder.com//250/250",phone:"0500 000 00 00"}]}});function _toConsumableArray(i){if(Array.isArray(i)){for(var e=0,t=Array(i.length);e<i.length;e++)t[e]=i[e];return t}return Array.from(i)}!function(i){var t=[].concat(_toConsumableArray(i.querySelectorAll(".tabs__item"))),a=[].concat(_toConsumableArray(i.querySelectorAll(".panels__item")));i.getElementById("tabs").addEventListener("click",function(i){if(i.target.classList.contains("tabs__item")){var e=t.indexOf(i.target);t.map(function(i){return i.classList.remove("active")}),t[e].classList.add("active"),a.map(function(i){return i.classList.remove("active")}),a[e].classList.add("active")}})}(document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMuanMiLCJ0YWJzTWVudS5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsInRlbXBsYXRlIiwidm0iLCJlbCIsImRhdGEiLCJzZXJ2aWNlcyIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImFmZmlsaWF0ZXMiLCJuYW1lIiwicGhvbmUiLCJkIiwidGFicyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYW5lbHMiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJpIiwiaW5kZXhPZiIsIm1hcCIsInRhYiIsInJlbW92ZSIsImFkZCIsInBhbmVsIiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiJhQUFBQSxJQUFJQyxVQUFVLFVBQVcsQ0FDdkJDLE1BQU8sQ0FBQyxRQUFTLFFBQVMsZUFDMUJDLFNBQUFBLDBSQWFGSCxJQUFJQyxVQUFVLFlBQWEsQ0FDekJDLE1BQU8sQ0FBQyxPQUFRLFFBQVMsU0FDekJDLFNBQUFBLDRPQVVGLElBQU1DLEdBQUssSUFBSUosSUFBSSxDQUNqQkssR0FBSSxPQUNKQyxLQUFNLENBQ0pDLFNBQVUsQ0FDUixDQUNFQyxNQUFPLFlBQ1BDLE1BQU8sc0NBQ1BDLFlBQWEsOEtBRWYsQ0FDRUYsTUFBTyxZQUNQQyxNQUFPLHNDQUNQQyxZQUFhLDhLQUVmLENBQ0VGLE1BQU8sWUFDUEMsTUFBTyxzQ0FDUEMsWUFBYSw4S0FFZixDQUNFRixNQUFPLFlBQ1BDLE1BQU8sc0NBQ1BDLFlBQWEsOEtBRWYsQ0FDRUYsTUFBTyxZQUNQQyxNQUFPLHNDQUNQQyxZQUFhLDhLQUVmLENBQ0VGLE1BQU8sWUFDUEMsTUFBTyxzQ0FDUEMsWUFBYSwrS0FHakJDLFdBQVksQ0FDVixDQUNFQyxLQUFNLFlBQ05ILE1BQU8sc0NBQ1BJLE1BQU8sa0JBRVQsQ0FDRUQsS0FBTSxZQUNOSCxNQUFPLHNDQUNQSSxNQUFPLGtCQUVULENBQ0VELEtBQU0sWUFDTkgsTUFBTyxzQ0FDUEksTUFBTyxrQkFFVCxDQUNFRCxLQUFNLFlBQ05ILE1BQU8sc0NBQ1BJLE1BQU8sZ0tDakZmLFNBQUVDLEdBQ0EsSUFBTUMsRUFBQUEsR0FBQUEsT0FBQUEsbUJBQVdELEVBQUVFLGlCQUFpQixpQkFDOUJDLEVBQUFBLEdBQUFBLE9BQUFBLG1CQUFhSCxFQUFFRSxpQkFBaUIsbUJBRXRDRixFQUFFSSxlQUFlLFFBQVFDLGlCQUFpQixRQUFTLFNBQUNDLEdBQ2xELEdBQUlBLEVBQUVDLE9BQU9DLFVBQVVDLFNBQVMsY0FBZSxDQUM3QyxJQUFNQyxFQUFJVCxFQUFLVSxRQUFRTCxFQUFFQyxRQUN6Qk4sRUFBS1csSUFBSSxTQUFBQyxHQUFBLE9BQU9BLEVBQUlMLFVBQVVNLE9BQU8sWUFDckNiLEVBQUtTLEdBQUdGLFVBQVVPLElBQUksVUFDdEJaLEVBQU9TLElBQUksU0FBQUksR0FBQSxPQUFTQSxFQUFNUixVQUFVTSxPQUFPLFlBQzNDWCxFQUFPTyxHQUFHRixVQUFVTyxJQUFJLGFBVjlCLENBYUdFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlZ1ZS5jb21wb25lbnQoJ3NlcnZpY2UnLCB7XG4gIHByb3BzOiBbJ3RpdGxlJywgJ2ltYWdlJywgJ2Rlc2NyaXB0aW9uJ10sXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJzZXJ2aWNlXCI+XG4gICAgPGRpdiBjbGFzcz1cInNlcnZpY2VfX2NhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmcm9udHNpZGVcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZDogJ3VybCgnICsgaW1hZ2UgKyAnKSd9XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja3NpZGVcIj5cbiAgICAgICAgPGgzPnt7IHRpdGxlIH19PC9oMz5cbiAgICAgICAgPHA+e3sgZGVzY3JpcHRpb24gfX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGBcbn0pXG5cblZ1ZS5jb21wb25lbnQoJ2FmZmlsaWF0ZScsIHtcbiAgcHJvcHM6IFsnbmFtZScsICdpbWFnZScsICdwaG9uZSddLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiYWZmaWxpYXRlX19jYXJkXCIgOnN0eWxlPVwie2JhY2tncm91bmQ6ICd1cmwoJyArIGltYWdlICsgJyknfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJhZmZpbGlhdGVfX2NhcHRpb25cIj5cbiAgICAgIDxoMz57eyBuYW1lIH19PC9oMz5cbiAgICAgIDxwPjxzcGFuIGNsYXNzPVwiZmEgZmEtcGhvbmVcIj48L3NwYW4+e3sgcGhvbmUgfX08L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgXG59KVxuXG5jb25zdCB2bSA9IG5ldyBWdWUoe1xuICBlbDogJyNhcHAnLFxuICBkYXRhOiB7XG4gICAgc2VydmljZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdTZXJ2aWNlIDEnLFxuICAgICAgICBpbWFnZTogJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLy8zMDAvMzAwJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmF0dXMgZGljdGEgYXV0ZW0gbnVsbGEgcXVhcyBkb2xvcmVzIGNvcnJ1cHRpIGVuaW0gbmVtbyBwcm92aWRlbnQsIG9mZmljaWlzIGNvbnNlcXV1bnR1ciBxdWFlIGlkIG1hZ25pIGF1dCwgaWxsbydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnU2VydmljZSAyJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8vMzAwLzMwMCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5hdHVzIGRpY3RhIGF1dGVtIG51bGxhIHF1YXMgZG9sb3JlcyBjb3JydXB0aSBlbmltIG5lbW8gcHJvdmlkZW50LCBvZmZpY2lpcyBjb25zZXF1dW50dXIgcXVhZSBpZCBtYWduaSBhdXQsIGlsbG8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1NlcnZpY2UgMycsXG4gICAgICAgIGltYWdlOiAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vLzMwMC8zMDAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOYXR1cyBkaWN0YSBhdXRlbSBudWxsYSBxdWFzIGRvbG9yZXMgY29ycnVwdGkgZW5pbSBuZW1vIHByb3ZpZGVudCwgb2ZmaWNpaXMgY29uc2VxdXVudHVyIHF1YWUgaWQgbWFnbmkgYXV0LCBpbGxvJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdTZXJ2aWNlIDQnLFxuICAgICAgICBpbWFnZTogJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLy8zMDAvMzAwJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmF0dXMgZGljdGEgYXV0ZW0gbnVsbGEgcXVhcyBkb2xvcmVzIGNvcnJ1cHRpIGVuaW0gbmVtbyBwcm92aWRlbnQsIG9mZmljaWlzIGNvbnNlcXV1bnR1ciBxdWFlIGlkIG1hZ25pIGF1dCwgaWxsbydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnU2VydmljZSA1JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8vMzAwLzMwMCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5hdHVzIGRpY3RhIGF1dGVtIG51bGxhIHF1YXMgZG9sb3JlcyBjb3JydXB0aSBlbmltIG5lbW8gcHJvdmlkZW50LCBvZmZpY2lpcyBjb25zZXF1dW50dXIgcXVhZSBpZCBtYWduaSBhdXQsIGlsbG8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1NlcnZpY2UgNicsXG4gICAgICAgIGltYWdlOiAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vLzMwMC8zMDAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOYXR1cyBkaWN0YSBhdXRlbSBudWxsYSBxdWFzIGRvbG9yZXMgY29ycnVwdGkgZW5pbSBuZW1vIHByb3ZpZGVudCwgb2ZmaWNpaXMgY29uc2VxdXVudHVyIHF1YWUgaWQgbWFnbmkgYXV0LCBpbGxvJ1xuICAgICAgfVxuICAgIF0sXG4gICAgYWZmaWxpYXRlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnY2xpbmljYSAxJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8vMjUwLzI1MCcsXG4gICAgICAgIHBob25lOiAnMDUwMCAwMDAgMDAgMDAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2xpbmljYSAyJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8vMjUwLzI1MCcsXG4gICAgICAgIHBob25lOiAnMDUwMCAwMDAgMDAgMDAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2xpbmljYSAzJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8vMjUwLzI1MCcsXG4gICAgICAgIHBob25lOiAnMDUwMCAwMDAgMDAgMDAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2xpbmljYSA0JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8vMjUwLzI1MCcsXG4gICAgICAgIHBob25lOiAnMDUwMCAwMDAgMDAgMDAnXG4gICAgICB9XG4gICAgXVxuICB9XG59KVxuIiwiKChkKSA9PiB7XG4gIGNvbnN0IHRhYnMgPSBbLi4uZC5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19faXRlbScpXTtcbiAgY29uc3QgcGFuZWxzID0gWy4uLmQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsc19faXRlbScpXTtcbiAgXG4gIGQuZ2V0RWxlbWVudEJ5SWQoJ3RhYnMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFic19faXRlbScpKSB7XG4gICAgICBjb25zdCBpID0gdGFicy5pbmRleE9mKGUudGFyZ2V0KTtcbiAgICAgIHRhYnMubWFwKHRhYiA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgdGFic1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIHBhbmVscy5tYXAocGFuZWwgPT4gcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgcGFuZWxzW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59KShkb2N1bWVudCk7XG5cbiJdfQ==
