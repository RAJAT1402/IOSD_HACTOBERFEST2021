#include<iostream>
#include<algorithm>
#include<bitset>
#include<numeric>
#include <vector>
using namespace std;

int size = 9;
vector<int> t(4*size);

int query(int k, int tl, int tr, int l, int r){
	if(l>r)
		return 0;
	if(l==tl && r==tr){
		return t[k];
	}

	int tm = (tl+tr)/2;
	return query(2*k+1, tl, tm, l, min(r, tm))+query(2*k+2, tm+1, tr, max(l, tm+1), r);
}

void update(int k, int tl, int tr, int pos, int new_val){
	if(tl==tr){
		t[k] = new_val;
		return; 
	}
	int tm = (tl+tr)/2;
	if(pos<=tm)
		update(2*k+1, tl, tm, pos, new_val);
	else
		update(2*k+2, tm+1, tr, pos, new_val);
	t[k] = t[k*2+1]+t[k*2+2];
}

void updateLazy(vector<int>&lazy, int tl, int tr, int l, int r, int tv, int val){
	if(l>r)
		return;

	//lazy propagation before using any node
	if(lazy[tv]!=0){
		t[tv] += lazy[tv];
		if(tl!=tr){
			lazy[2*tv+1] += lazy[tv];
			lazy[2*tv+2] += lazy[tv];
		}
		lazy[tv] = 0;
	}

	//complete overlap of update interval
	if(l==tl && r==tr){
		t[tv] += val;
		if(tl!=tr){
			lazy[2*tv+1] += val;
			lazy[2*tv+2] += val;
		}
	}
	int tm = (tl+tr)/2;
	updateLazy(lazy, tl, tm, l, min(r, tm), 2*tv+1, val);
	updateLazy(lazy, tm+1, tr, max(l, tm+1), r, 2*tv+2, val);
}

int queryLazy(vector<int>&lazy, int tl, int tr, int l, int r, int tv){
	if(l>r)
		return 0;

	if(lazy[tv]!=0){
		t[tv] += lazy[tv];
		if(tl!=tr){
			lazy[2*tv+1] += lazy[tv];
			lazy[2*tv+2] += lazy[tv];
		}
		lazy[tv] = 0;
	}

	if(tl==l && tr==r){
		return t[tv];
	}

	int tm = (tl+tr)/2;
	return queryLazy(lazy, tl, tr, l, min(tm, r), 2*tv+1)
			+queryLazy(lazy, tl, tr, min(tm+1, l), r, 2*tv+2);
}

void buildTree(vector<int> &v, int tl, int tr, int k){
	if(tl==tr){
		t[k] = v[tl];
		return;
	}

	int tm = (tl+tr)/2;
	buildTree(v, tl, tm, 2*k+1);
	buildTree(v, tm+1, tr, 2*k+2);
	t[k] = t[2*k+1]+t[2*k+2];
}

int main(){
	vector<int> v = {-2,3,-1,5,6,0,-2,1,3};

	buildTree(v);
	for(auto n: v)
		cout<<n<<"\n";
	return 0;
}
