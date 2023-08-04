package egovframework.omcst.excel;

import java.util.List;

public interface RowCallBack {
        void handleRow(List<Object> values);
}